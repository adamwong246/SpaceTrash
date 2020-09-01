var ipc = require('node-ipc');
console.log("hello ai-harness.")

const modulePath = process.argv[2]
const socketName = process.argv[3]

console.log("modulePath:", modulePath)
console.log("socketName:", socketName)

const ai = require(modulePath)



ipc.config.id = 'ai';
ipc.config.retry = 1500;

ipc.connectTo(
  'spacetrash',
  function() {
    ipc.of.spacetrash.on(
      'connect',
      function() {
        ipc.log('## connected to spacetrash ##'.rainbow, ipc.config.delay);
        ipc.of.spacetrash.emit(
          'message', //any event or message type your server listens for
          JSON.stringify({"ping": "pong"})
        )
      }
    );
    ipc.of.spacetrash.on(
      'disconnect',
      function() {
        ipc.log('disconnected from spacetrash'.notice);
      }
    );
    ipc.of.spacetrash.on(
      'message', //any event or message type your server listens for
      function(data) {
        ipc.log('got a message from spacetrash : '.debug, data);
      }
    );
  }
);
