const http = require('http');
const WebSocket = require('ws');

const Session = require('./models/Session.js');
const Ship = require('./models/Ship.js');

const bserver = http.createServer({});
const webPort = 5000;

bserver.listen(webPort, () => console.log('Web server start. http://localhost:' + webPort));

const wss = new WebSocket.Server({server: bserver});

wss.on('connection', ws => {
  ws.send(JSON.stringify({msg: "user joined"}));
  console.log('connected');

  ws.room = [];

  ws.on('error', e => console.log(e))
  ws.on('close', (e) => console.log('websocket closed' + e))

  ws.on('message', message => {
    console.log('message: ', message);
    var messag = JSON.parse(message);
    messag.createdAt = Date.now()

    if (messag.join) {
      console.log('joining: ', messag.join);
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
                (err, doc) => {
                  pushUpdateToAllUsers(roomsAddress[1], [roomsAddress[3]])
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

function pushUpdateToAllUsers(sessionId, users) {
  // console.log("updateTerm", sessionId, users)

  Session.findById(
    sessionId,
    (err, sessionDoc) => {

      Ship.find({}, (err, ships) => {


        users.forEach(user => {
          wss.clients.forEach(client => {
            const address = `session-${sessionId}-user-${user}`
            if (client.room.indexOf(address) > -1) {
              client.send(JSON.stringify({
                room: address,
                msg: {
                  chatLog: sessionDoc.chatLog,
                  ships: ships.map((ship) => ship.toObject({ virtuals: true }))
                }
              }))
            }
          })
        })

      })


    }
  )





}

function broadcast(message) {
  console.log('broadcast, ', message.room);

  wss.clients.forEach(client => {
    console.log('- client.room', client.room);
    if (client.room.indexOf(message.room) > -1) {
      client.send(JSON.stringify(message))
    }
  })
}
