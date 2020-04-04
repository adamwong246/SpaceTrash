import path from 'path';
import electron, {app, BrowserWindow} from 'electron';
import {fork} from 'child_process';
import findOpenSocket from './find-open-socket';
import isDev from 'electron-is-dev';

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

// function createBackgroundWindow(socketName) {
//   const win = new BrowserWindow({
//     x: 500,
//     y: 300,
//     width: 700,
//     height: 500,
//     show: true,
//     webPreferences: {
//       nodeIntegration: true
//     }
//   })
//
//   // const p = path.resolve('dist', 'server-devz.html')
//   // console.log(p)
//   // // win.loadURL(`file://${__dirname}server-dev.html`)
//   // // win.loadURL(path.resolve('dist', 'server-dev.html'))
//   // // win.loadURL('server-dev.html')
//   // win.loadURL(p)
//   win.loadFile('server-dev.html')
//
//   win.webContents.on('did-finish-load', () => {
//     win.webContents.send('set-socket', { name: socketName })
//   })
//
//   serverWin = win
// }

function createBackgroundProcess(socketName) {
  console.log('createBackgroundProcess')
  const bundlePath = '/Users/adam/Programming/electron-react-typescript-webpack-boilerplate/dist/server.bundle.js';
  console.log(bundlePath);
  console.log(socketName);
  const args = [
    '--subprocess',
    app.getVersion(),
    socketName
  ];
  console.log(args)
  serverProcess = fork(bundlePath, args);

  serverProcess.on('message', msg => {
    console.log('message: ', msg)
  })
}

app.on('ready', async () => {
  const serverSocket = await findOpenSocket()

  createWindow(serverSocket)

  createBackgroundProcess(serverSocket)
  // if (isDev) {
  //   createBackgroundWindow(serverSocket)
  // } else {
  //   createBackgroundProcess(serverSocket)
  // }
})

app.on('before-quit', () => {
  if (serverProcess) {
    serverProcess.kill()
    serverProcess = null
  }
})
