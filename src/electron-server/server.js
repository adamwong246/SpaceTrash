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
