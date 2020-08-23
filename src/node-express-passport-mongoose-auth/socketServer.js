const http = require('http');
const WebSocket = require('ws');

const Drone = require('./models/Drone.js');
const Session = require('./models/Session.js');
const Ship = require('./models/Ship.js');
const User = require('./models/User.js');

const gameState = require("./models/gameState.js");

const getRays = require("./getRays.js")

const bserver = http.createServer({});
const webPort = 5000;

bserver.listen(webPort, () => console.log('Web server start. http://localhost:' + webPort));

const wss = new WebSocket.Server({
  server: bserver
});

wss.on('connection', ws => {
  ws.send(JSON.stringify({
    msg: "user joined"
  }));
  console.log('connected');

  ws.room = [];

  ws.on('error', e => console.log(e))
  ws.on('close', (e) => console.log('websocket closed' + e))

  ws.on('message', message => {
    const start = Date.now();

    var messag = JSON.parse(message);
    messag.createdAt = new Date()

    if (messag.join) {
      ws.room.push(messag.join)
    }

    if (messag.room) {
      if (messag.msg) {

        const roomsAddress = messag.room.split('-')
        if (roomsAddress[0] === 'session') {
          if (roomsAddress[2] === 'user') {

            if (messag.msg.load) {
              Session.findById(
                roomsAddress[1],
                (err, session) => {
                  broadcastSession2(session, session.gameState, messag.msg.timestamp)
                }
              )
            } else if (messag.msg.say) {

              Session.findByIdAndUpdate(
                roomsAddress[1], {
                  $push: {
                    chatLog: {
                      createdAt: Date.now(),
                      msg: messag.msg.say,
                      user: roomsAddress[3]
                    }
                  }
                }, {}, (err, doc) => {
                  pushUpdateToAllUsers(roomsAddress[1], doc.users)
                }
              )
            } else if (messag.msg.commandQueues) {
              enqueUpdate(messag)
            }
          } else {
            Session.findByIdAndUpdate(
              roomsAddress[1], {
                $push: {
                  chatLog: messag
                }
              }, {}, (doc) => {
                broadcast(messag);
              }
            )
          }
        }
      }
    }
  })
})

//////////////////////////////////////////////////////////////////////////
// The internal instruction Queue
//////////////////////////////////////////////////////////////////////////

const updateQueue = []

setTimeout(dequeUpdate, 1)

function enqueUpdate(message) {
  updateQueue.push(message)
}

function dequeUpdate() {
  const message = updateQueue.shift()

  if (!message) {
    setTimeout(dequeUpdate, 1)
    return
  }

  const roomsAddress = message.room.split('-')
  Session.findById(roomsAddress[1], (err, session) => {
    const updateData = gameState.updateState(session, message.msg.commandQueues)

    session.validate(function(err) {
      if (err) {
        console.log('invalid! ', err)
      } else {
        session.markModified('gameState');
        session.save(function(err, savedSessionDoc) {
          setTimeout(dequeUpdate, 1)
          if (err) {
            console.log(`the error:`, err)
          };
          broadcastSession2(savedSessionDoc, session.gameState, message.timestamp)
        });
      }
    });
  })
}

//////////////////////////////////////////////////////////////////////////
// Send gameState to all users
//////////////////////////////////////////////////////////////////////////
function broadcastSession2(session, updateData, now) {
  session.users.forEach(userId => {
    wss.clients.forEach(client => {
      const address = `session-${session._id}-user-${userId}`
      if (client.room.indexOf(address) > -1) {
        const stringPayload = JSON.stringify({
          room: address,
          msg: updateData,
          timestamp: now
        })
        client.send(stringPayload)
      }
    })
  })
};

//////////////////////////////////////////////////////////////////////////
// Garbgage to remove
//////////////////////////////////////////////////////////////////////////

const blankCharacter = '_';

function pushUpdateToAllUsers(sessionId, users) {

  Session.findById(
    sessionId,
    (err, sessionDoc) => {

      Ship.find({}, (err, ships) => {


        Drone.find({}, (err, drones) => {

          users.forEach(user => {
            wss.clients.forEach(client => {
              const address = `session-${sessionId}-user-${user}`
              if (client.room.indexOf(address) > -1) {

                // const mappedShips = ships
                // .map((ship) => ship.toObject({virtuals: true}))
                // .map((ship) => {
                //   if (ship.shipMap.gridMap){
                //
                //     const height = ship.shipMap.yMax - ship.shipMap.yMin
                //     const width = ship.shipMap.xMax - ship.shipMap.xMin
                //     const depth = 2
                //     const matrix = new Array(height).fill(blankCharacter).map(() => new Array(width).fill(blankCharacter).map(() => new Array(depth).fill(blankCharacter)));
                //
                //     for (var yNdx = 0; yNdx < height; yNdx++) {
                //       for (var xNdx = 0; xNdx < width; xNdx++) {
                //         const x = xNdx + ship.shipMap.xMin
                //         const y = yNdx + ship.shipMap.yMin
                //         if (ship.shipMap.gridMap[x][y]) {
                //           matrix[yNdx][xNdx][0] = ship.shipMap.gridMap[x][y]
                //         }
                //       }
                //     }
                //     ship.shipMap.matrix = matrix
                //   }
                //   return ship
                // })
                // .map((ship) => {
                //   if (ship.shipMap.matrix){
                //     drones.filter((drone) => drone.ship === ship.id)
                //     .forEach((drone) => {
                //       ship.shipMap.matrix[Math.round(drone.y)][Math.round(drone.x)][1] = `drone-${drone.id}`
                //     })
                //   }
                //   return ship
                // })
                //
                //
                // const dronesWithRays = drones
                // .map((drone) => drone.toObject({virtuals: true}))
                // .map((drone) => {
                //   const foundShip = mappedShips.filter((s) => s.id === drone.ship)[0]
                //   drone.rays = getRays(drone, foundShip);
                //   return drone;
                // });

                var userState

                client.send(JSON.stringify({
                  room: address,
                  msg: {
                    userState
                  }
                }))
              }
            })
          })
        })
      })

    }
  )
}

function broadcast(message) {
  // console.log('broadcast, ', message.room);

  wss.clients.forEach(client => {
    // console.log('- client.room', client.room);
    if (client.room.indexOf(message.room) > -1) {
      client.send(JSON.stringify(message))
    }
  })
}
