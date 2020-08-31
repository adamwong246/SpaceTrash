import path from 'path';
import electron, {app, BrowserWindow} from 'electron';
import {fork} from 'child_process';
import isDev from 'electron-is-dev';

import ipcFactory from "./ipcFactory";
import selectorsFactory  from  "./redux/selectors.js";
import serverHandlersFactory from "./server-handlers";
import websocketFactory from "./websocketFactory.ts";

import store from "./redux/store.js";

const websocket = websocketFactory(store)
const ipc = ipcFactory(store)

const serverHandlers = serverHandlersFactory(ipc, websocket);
const selectors = selectorsFactory(ipc, websocket)

ipc.init("spacetrash", serverHandlers, selectors)
websocket.init(selectors)


let clientWin
let serverWin
let serverProcess

function createWindow() {

  clientWin = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      nodeIntegration: true,
      preload: path.resolve('dist', 'preload.js'),
    },
    title: "SpaceTrash v0.0.8"
  })

  clientWin.loadFile('index.html')

  clientWin.webContents.on('did-finish-load', () => {
    clientWin.webContents.send('set-socket', {
      name: 'spacetrash'
    })
  })
}

app.on('ready', async () => {
  createWindow()
})
