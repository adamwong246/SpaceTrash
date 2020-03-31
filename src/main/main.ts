/**
 * Entry point of the Election app.
 */
import { app, BrowserWindow, ipcMain } from 'electron';
import * as path from 'path';
import * as url from 'url';

const windowManager = require('electron-window-manager');

let mainWindow: Electron.BrowserWindow | null;

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', function() {
 windowManager.init();

 windowManager.open('boot', 'boot!',
  url.format({
   pathname: path.join(__dirname, './index.html'),
   protocol: 'file:',
   slashes: true,
   search: 'boot'
  }),
  false,
  { 'width': 1000, 'height': 800, 'webPreferences': { nodeIntegration: true } }
 );




});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
 // On OS X it is common for applications and their menu bar
 // to stay active until the user quits explicitly with Cmd + Q
 if (process.platform !== 'darwin') {
  app.quit();
 }
});

app.on('activate', () => {
 // On OS X it"s common to re-create a window in the app when the
 // dock icon is clicked and there are no other windows open.
 // if (mainWindow === null) {
 //     createWindow();
 // }
});

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
