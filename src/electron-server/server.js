import serverHandlersFactory from "./server-handlers";
import websocketFactory from "./websocketFactory.ts";

const {socketServer, ping} = websocketFactory();
const serverHandlers = serverHandlersFactory(ping);

import ipc from "./server-ipc";


let socketName = "spacetrash"
console.log('spaceTrash server.js on socket: ', socketName)
ipc.init(socketName, serverHandlers)
