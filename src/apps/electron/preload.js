const { ipcRenderer } = require('electron')
// const isDev = require('electron-is-dev')
const ipc = require('node-ipc')
const uuid = require('uuid')

console.log("PRELOAD")

let resolveSocketPromise
let socketPromise = new Promise(resolve => {
  resolveSocketPromise = resolve
})
//
// window.IS_DEV = isDev
//
window.getServerSocket = () => {
  return socketPromise
}

ipcRenderer.on('set-socket', (event, { name }) => {
  console.log("preload.js set-socket");
  resolveSocketPromise(name)
})

window.ipcConnect = (id, func) => {
  console.log("preload.js ipcConnect");
  ipc.config.silent = true
  ipc.connectTo(id, () => {
    func(ipc.of[id])
  })
}

window.uuid = uuid
