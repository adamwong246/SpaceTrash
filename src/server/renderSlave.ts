const processInstructionThen = require("./lib/processInstructionThen.ts");

const Instruction = require("./models/Instruction.js");
const Session = require("./models/Session.js");

var timeflag = Date.now();

module.exports = (socketServer) => {

  const updateQueue = [];

  const dequeuer = () => {
    Instruction.find().limit(1).sort({ timestamp: 1 })
      .exec((err, instructions) => {

        if (!instructions || !instructions.length) {
          setTimeout(dequeuer)
          return
        } else {

          const instruction = instructions[0];

          Session.findById(instruction.sessionId, (err, session) => {
            processInstructionThen(session, instruction, (savedSession) => {
              savedSession.users.forEach(userId => {
                socketServer.clients.forEach(client => {
                  const address = `session-${savedSession._id}-user-${userId}`
                  if (client.room.indexOf(address) > -1) {
                    const stringPayload = JSON.stringify({
                      room: address,
                      msg: savedSession.gameState,
                      timestamp: Date.now()
                    })
                    client.send(stringPayload)
                  }
                })
              })
            })
          })

          Instruction.deleteOne({ _id: instruction.id }, (err, deletedInstruction) => {
            setTimeout(dequeuer)
          })

        }
      })
  }

  // start the timer the 1st time.
  setTimeout(dequeuer);

  return (message) => {

    const now = Date.now();
    const roomsAddress = message.room.split('-')

    Instruction.create({
      sessionId: roomsAddress[1],
      droneId: message.msg.enqueue.drone,
      command: message.msg.enqueue.instruction,
      timestamp: Date.now()
    });
  }


}
