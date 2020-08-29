// const net = require('net');
// const os = require('os');
// const { join } = require('path');
// const ipc = require('node-ipc');
//
// ipc.config.silent = true;
//
// function isSocketTaken(name, fn) {
//   return new Promise((resolve, reject) => {
//     ipc.connectTo(name, () => {
//       ipc.of[name].on('error', () => {
//         console.log('ipc error', name)
//         ipc.disconnect(name);
//         resolve(false);
//       });
//
//       ipc.of[name].on('connect', () => {
//         console.log('ipc connect', name)
//         ipc.disconnect(name);
//         resolve(true);
//       });
//     });
//   });
// }
//
// async function findOpenSocket() {
//   let currentSocket = 1;
//   console.log('checking', currentSocket);
//   while (await isSocketTaken('myapp' + currentSocket)) {
//     currentSocket++;
//     console.log('checking', currentSocket);
//   }
//   console.log('found socket', currentSocket);
//   return 'myapp' + currentSocket;
// }
//
// module.exports = findOpenSocket;
