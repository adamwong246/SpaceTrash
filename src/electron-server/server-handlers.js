export default (ipcSocket, webSocket) => {

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

  return handlers;
}
