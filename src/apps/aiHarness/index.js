const fs = require('fs');
const {
  NodeVM
} = require('vm2');
const webpack = require('webpack');
const ipc = require('node-ipc');

console.log("hello ai-harness.")

ipc.config.id = 'ai';
ipc.config.retry = 1500;

ipc.connectTo(
  'spacetrash',
  function() {
    ipc.of.spacetrash.on(
      'connect',
      function() {
        // ipc.log('## connected to spacetrash ##'.rainbow, ipc.config.delay);
        ipc.of.spacetrash.emit(
          'message', //any event or message type your server listens for
          JSON.stringify({
            "ping": "pong"
          })
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
        ipc.log('got a message from spacetrash : '.debug);
      }
    );
  }
);
