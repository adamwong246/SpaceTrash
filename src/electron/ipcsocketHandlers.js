const path = require('path');

const {
  dialog
} = require('electron')
const webpack = require('webpack');

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
      selectors(store.getState())
    })
  }

  handlers['PACK_FOLDER'] = async (commands) => {
    console.log("PACK_FOLDER")
    const w = webpack({
      entry: './../adam/adamShipV0.js',
      output: {
        filename: 'adamBundle.js',
        path: path.resolve(__dirname, './dist'),
      },
    }, (err, stats) => { // Stats Object
      if (err || stats.hasErrors()) {
        console.log(err)
      }
      console.log(stats)
    })



  }

  return handlers;
}
