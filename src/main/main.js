// const { app, BrowserWindow } = require('electron')
let path = require("path");
//
// function createWindow () {
//   // Create the browser window.
//   let win = new BrowserWindow({
//     width: 800,
//     height: 600,
//     webPreferences: {
//       nodeIntegration: true,
//       preload: path.resolve('dist', 'preload.js'),
//     },
//     title: "SpaceTrash v0"
//   })
//
//   // and load the index.html of the app.
//   win.loadFile('index.html')
// }
//
// app.whenReady().then(createWindow)

let electron = require('electron')
let { app, BrowserWindow } = require('electron')
let { fork } = require('child_process')
let findOpenSocket = require('./find-open-socket')
let isDev = require('electron-is-dev')

let clientWin
let serverWin
let serverProcess

function createWindow(socketName) {
  clientWin = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // nodeIntegration: false,
      nodeIntegration: true,
      // preload: __dirname + '/client-preload.js'
      preload: path.resolve('dist', 'preload.js'),
    },
    title: "SpaceTrash v0"
  })

  // clientWin.loadFile('client-index.html')
  clientWin.loadFile('index.html')

  clientWin.webContents.on('did-finish-load', () => {
    clientWin.webContents.send('set-socket', {
      name: socketName
    })
  })
}

function createBackgroundWindow(socketName) {
  const win = new BrowserWindow({
    x: 500,
    y: 300,
    width: 700,
    height: 500,
    show: true,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // const p = path.resolve('dist', 'server-devz.html')
  // console.log(p)
  // // win.loadURL(`file://${__dirname}server-dev.html`)
  // // win.loadURL(path.resolve('dist', 'server-dev.html'))
  // // win.loadURL('server-dev.html')
  // win.loadURL(p)
  win.loadFile('server-dev.html')

  win.webContents.on('did-finish-load', () => {
    win.webContents.send('set-socket', { name: socketName })
  })

  serverWin = win
}

function createBackgroundProcess(socketName) {
  serverProcess = fork(__dirname + '/server.js', [
    '--subprocess',
    app.getVersion(),
    socketName
  ])

  serverProcess.on('message', msg => {
    console.log(msg)
  })
}

app.on('ready', async () => {
  serverSocket = await findOpenSocket()

  createWindow(serverSocket)

  if (isDev) {
    createBackgroundWindow(serverSocket)
  } else {
    createBackgroundProcess(serverSocket)
  }
})

app.on('before-quit', () => {
  if (serverProcess) {
    serverProcess.kill()
    serverProcess = null
  }
})
