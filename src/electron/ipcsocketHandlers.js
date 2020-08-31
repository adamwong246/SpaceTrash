const { dialog } = require('electron')

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
      store.dispatch({type: "PICK_FOLDER", payload: folder.filePaths[0]})
      selectors(store.getState())
    })


  }

  return handlers;
}
