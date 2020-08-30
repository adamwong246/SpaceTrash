const http = require('http');
const WebSocket = require('ws');

const Drone = require('./models/Drone.js');
const Session = require('./models/Session.js');
const Ship = require('./models/Ship.js');
const User = require('./models/User.js');

const bserver = http.createServer({});
const webPort = 5000;

bserver.listen(webPort, () => console.log('Web server start. http://localhost:' + webPort));

const wss = new WebSocket.Server({
  server: bserver
});

module.exports = {

  socketServer: (enqueuer, loader) => {
    wss.on('connection', ws => {
      ws.send(JSON.stringify({
        msg: "user joined"
      }));

      console.log('connected');

      ws.room = [];

      ws.on('error', e => console.log(e))
      ws.on('close', (e) => console.log('websocket closed' + e))

      ws.on('message', message => {
        console.log("on mesage", message)
        // console.log(new Date().toISOString(), "message")
        const start = Date.now();

        var messag = JSON.parse(message);
        messag.createdAt = new Date()

        if (messag.join) {

          if (ws.room.indexOf(messag.join) === -1) {
            ws.room.push(messag.join)
          }
        }

        if (messag.room) {
          if (messag.msg) {

            const roomsAddress = messag.room.split('-')

            if (roomsAddress[0] === 'sessionSudo') {
              console.log("message received from a sessionSudo")
            }

            if (roomsAddress[0] === 'session') {
              if (roomsAddress[2] === 'user') {

                if (messag.msg.load) {
                  Session.findById(
                    roomsAddress[1],
                    (err, session) => {
                      loader(session, messag)
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
                } else if (messag.msg.enqueue) {
                  console.log("ENQUEU MESSAGE RECEIVED")
                  const sessionId = roomsAddress[1]
                  enqueuer(messag.msg.enqueue, sessionId)
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
  },

  broadcaster: (room, payload) => {
    console.log(new Date().toISOString(), "BROADCASTING", room)
    wss.clients.forEach(client => {
      // console.log("client.room", client.room)
      if (client.room.indexOf(room) > -1) {


        const stringPayload = JSON.stringify({
          room,
          msg: payload,
          timestamp: Date.now()
        })

        // console.log("sending", stringPayload)
        client.send(stringPayload)
      }
    })
  }
}

// //////////////////////////////////////////////////////////////////////////
// // Send gameState to all users
// //////////////////////////////////////////////////////////////////////////
// function broadcastSession2(session, updateData, now) {
//   session.users.forEach(userId => {
//     wss.clients.forEach(client => {
//       const address = `session-${session._id}-user-${userId}`
//       if (client.room.indexOf(address) > -1) {
//         const stringPayload = JSON.stringify({
//           room: address,
//           msg: updateData,
//           timestamp: now
//         })
//         client.send(stringPayload)
//         console.log("response time:", Date.now() - now )
//       }
//     })
//   })
// };
//
