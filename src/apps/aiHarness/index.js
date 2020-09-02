const fs = require('fs');
const {
  NodeVM
} = require('vm2');
const webpack = require('webpack');
const ipc = require('node-ipc');

console.log("hello ai-harness.")


const bundleProject = () => {
  const webpackText = fs.readFileSync('/Users/adam/Programming/spacetrashConfigs/webpack.config.js', {
    encoding: 'utf8',
    flag: 'r'
  });

  console.log(webpackText)

  const vm = new NodeVM({
    require: {
      builtin: ['path']
    },
    sandbox: {}
  });

  const webpackConfig = vm.run(webpackText).map((config) => {
    return {
      ...config,
      entry: "/Users/adam/Programming/spacetrashConfigs" + config.entry.split('.')[1]
    }
  })

  console.log(webpackConfig)

  webpack(webpackConfig, (err, stats) => {
    console.log("done packing")

    ipc.of.spacetrash.emit(
      'message',
      JSON.stringify({
        name: "userView",
        args: {
          name: "view-bundle.js",
          contents: fs.readFileSync('/Users/adam/Programming/spacetrash/dist/views/view-bundle.js', {
            encoding: 'utf8',
            flag: 'r'
          })
        }
      })
    )

    ipc.of.spacetrash.emit(
      'message',
      JSON.stringify({
        name: "userAi",
        args: {
          name: "ai-bundle.js",
          contents: fs.readFileSync('/Users/adam/Programming/spacetrash/dist/ais/ai-bundle.js', {
            encoding: 'utf8',
            flag: 'r'
          })
        }
      })
    )

    ipc.of.spacetrash.emit(
      'message',
      JSON.stringify({
        name: "userShip",
        args: {
          name: "ship-bundle.js",
          contents: fs.readFileSync('/Users/adam/Programming/spacetrash/dist/ships/ship-bundle.js', {
            encoding: 'utf8',
            flag: 'r'
          })
        }
      })
    )

  })

};

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
        console.log("MESSAGE: ", data)

        const jsonData = JSON.parse(data)
        if (jsonData.args) {
          if (jsonData.args.PACK_FOLDER) {
            bundleProject()
          }
        }


      }
    );
  }
);
