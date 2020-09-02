const fs = require('fs');
const webpack = require('webpack');
const ipc = require('node-ipc');

var autopilot;

const setAutopilot = (someData) => {
  console.log('setAutopilot', someData)
  const evaluated = eval(fs.readFileSync('/Users/adam/Programming/spacetrashConfigs/src/ai.js', {
    encoding: 'utf8',
    flag: 'r'
  }))

  autopilot = new evaluated();



  ipc.of.spacetrash.emit(
    'message',
    JSON.stringify({
      name: "autopilot_engaged",
      args: {}
    })
  )


};

const commandAutopilot = (command = "") => {
  console.log('commandAutopilot', command)
  if (autopilot) {
    autopilot.command(command)
  }
};

const informAutopilot = (newMap = {}) => {
  console.log('informAutopilot', newMap)
  if (autopilot) {
    debugger
    autopilot.inform(newMap)
  }
};

const bundleProject = () => {
  const webpackText = fs.readFileSync('/Users/adam/Programming/spacetrashConfigs/webpack.config.js', {
    encoding: 'utf8',
    flag: 'r'
  });

  console.log(webpackText)

  // const virtualMachine = new NodeVM({
  //   require: {
  //     builtin: ['path']
  //   },
  //   sandbox: {}
  // });
  //
  const webpackConfig = eval(webpackText).map((config) => {
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
          contents: fs.readFileSync('/Users/adam/Programming/spacetrashConfigs/src/view.js', {
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
          name: "ai-bundle.js"
        }
      })
    )

    ipc.of.spacetrash.emit(
      'message',
      JSON.stringify({
        name: "userShip",
        args: {
          name: "ship-bundle.js",
          contents: fs.readFileSync('/Users/adam/Programming/spacetrashConfigs/src/ship.js', {
            encoding: 'utf8',
            flag: 'r'
          })
        }
      })
    )

  })

};

const makeShip = () => {
  const virtualMachine = new NodeVM({});

  const shipData = virtualMachine.run(
    fs.readFileSync('/Users/adam/Programming/spacetrashConfigs/src/ship.js', {
      encoding: 'utf8',
      flag: 'r'
    })
  )

  ipc.of.spacetrash.emit(
    'message',
    JSON.stringify({
      name: "setShipData",
      args: shipData
    })
  )

};


ipc.config.id = 'ai';
ipc.config.retry = 2000;

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
        console.log("MESSAGE: ", data);

        const jsonData = JSON.parse(data)

        if (jsonData.name === "MAKE_SHIP") {
          makeShip(jsonData.args.userShipBundleName);
        }

        if (jsonData.args) {
          if (jsonData.args.PACK_FOLDER) {
            bundleProject();
          }
        }

        if (jsonData.name === "SET_AUTOPILOT") {
          setAutopilot(jsonData.args);
        }
        if (jsonData.name === "COMMAND_AUTOPILOT") {
          commandAutopilot(jsonData.args);
        }
        if (jsonData.name === "INFORM_AUTOPILOT") {
          informAutopilot(jsonData.args);
        }


      }
    );
  }
);
