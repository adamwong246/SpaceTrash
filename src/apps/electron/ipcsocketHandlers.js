const path = require('path');
const {
  dialog
} = require('electron')


export default (ipcSocket, webSocket, store, selectors) => {

  let handlers = {}

  handlers._history = []

  handlers['ping'] = async () => {
    console.log('pinged')
    return 'pong'
  }

  handlers['ping2'] = async () => {
    console.log('pinged2')
    webSocket.ping()
    return 'pong2'
  }

  handlers['load'] = async () => {
    const state = store.getState()
    selectors.selectAndBroadcastSourceFiles(state);
    return webSocket.load()
  }

  handlers['idk'] = async () => {
    return 'idk'
  }

  handlers['enqueue'] = async (commands) => {
    return webSocket.enqueue(commands)
  }

  handlers['PICK_FOLDER'] = async (commands) => {
    dialog.showOpenDialog({
      title: "spaceTrash",
      message: "Pick a source folder",
      properties: ['openDirectory']
    }).then((folder) => {
      store.dispatch({
        type: "PICK_FOLDER",
        payload: folder.filePaths[0]
      })
    }).then(() =>{
      const state = store.getState();
      selectors.selectAndBroadcastSourceFolder(state)
      selectors.selectAndBroadcastSourceFiles(state)
    })
  }

  handlers['userView'] = async (payload) => {
    store.dispatch({
      type: "ADD_USER_VIEW",
      payload
    })
    const state = store.getState();
    selectors.selectAndBroadcastUserViews(state)
  }

  handlers['userAi'] = async (payload) => {
    store.dispatch({
      type: "ADD_USER_AI",
      payload
    })
    const state = store.getState();
    selectors.selectAndBroadcastUserAis(state)
  }

  handlers['userShip'] = async (payload) => {
    store.dispatch({
      type: "ADD_USER_SHIP",
      payload
    })
    const state = store.getState();
    selectors.selectAndBroadcastUserShips(state)
  }

  handlers['PACK_FOLDER'] = async (commands) => {
    console.log("PACK_FOLDER")
    ipcSocket.send("spacetrash", {"PACK_FOLDER": true})
    // if (!store.getState().sourceFolder) {
    //   store.dispatch({
    //     type: "PACK_ERRORS",
    //     payload: ["you haven't set a source folder"]
    //   })
    //   selectors(store.getState())
    //   return
    // }
    // // //
    // // // const sourceFolder = selectors(store.getState()).sourceFolder;
    // // // const entry = sourceFolder + 'index.js';
    // // // const path =  sourceFolder + 'dist';
    // //
    // // const entry = '/Users/adam/Programming/spacetrashConfigs/index.js';
    // // const path = '/Users/adam/Programming/spaceTrash/src/electron/tests/dist';
    // //
    // // console.log(entry, path)
    //
    // const webpackText = fs.readFileSync('/Users/adam/Programming/spacetrashConfigs/webpack.config.js', {
    //   encoding: 'utf8',
    //   flag: 'r'
    // });
    //
    // console.log(webpackText)
    //
    // var res = require('vm').runInThisContext(m.wrap(webpackText))(exports, require, module, __filename, __dirname)
    // // var webpackConfigJson = safeEval(webpackText, {require})
    //
    // console.log(webpackConfigJson)
    // const vm = new NodeVM({ require: { builtin: ['events'] } });
    // vm.run(`require('events')`)
    // vm.run(`
    //     var request = require('request');
    //     request('http://www.google.com', function (error, response, body) {
    //         console.error(error);
    //         if (!error && response.statusCode == 200) {
    //             console.log(body) // Show the HTML for the Google homepage.
    //         }
    //     })
    // `, 'vm.js');
    //
    //
    // webpack({}, (err, stats) => {
    //   if (err || stats.hasErrors()) {
    //     store.dispatch({
    //       type: "PACK_ERRORS",
    //       payload: stats.compilation.errors.map((e) => {
    //         return e.message
    //       })
    //     })
    //   } else {
    //     store.dispatch({
    //       type: "PACK_ERRORS",
    //       payload: ["AOK"]
    //     })
    //   }
    //   selectors(store.getState())
    // })

  }

  return handlers;
}
