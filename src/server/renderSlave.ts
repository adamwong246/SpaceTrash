const processInstructionThen = require("./lib/processInstructionThen.ts");

const Session = require("./models/Session.js");

module.exports = (socketServer) => {

  const updateQueue = [];

  const dequeuer = () => {

    const instruction = updateQueue.shift()
    if (!instruction) { setTimeout(dequeuer) }
    else {

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
          setTimeout(dequeuer)
        })
      })
    }
  }

  // start the timer the 1st time.
  setTimeout(dequeuer);

  return (message) => {

    const now = Date.now();
    const roomsAddress = message.room.split('-')
    const instruction = {
      sessionId: roomsAddress[1],
      droneId: message.msg.enqueue.drone,
      command: message.msg.enqueue.instruction,
      timestamp: Date.now()
    }

    updateQueue.push(instruction);
  }


}
