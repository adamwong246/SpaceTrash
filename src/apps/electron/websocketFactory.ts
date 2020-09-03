const http = require('http');
const WebSocket = require('ws');

export default (store) => {

  var ws = new WebSocket('ws://localhost:5000');
  ws.onerror = function(e) { console.log(`onerror: ${JSON.stringify(e)}`) }
  ws.onclose = function(e) { console.log(`onclose: ${JSON.stringify(e)}`) }
  ws.onopen = function(e) {
    // console.log(`onopen: ${JSON.stringify(e)}`)
  }

  return {
    init: (selectors) => {

      ws.onmessage = function(e) {
        const data = JSON.parse(e.data)
        // console.log(`onmessage`, data)

        if (data.msg === "user joined") {
        } else if (data.msg.updateFromCloud) {
            store.dispatch({ type: "RECEIVE_UPDATE_FROM_SERVER", payload: data.msg.updateFromCloud })
            selectors.selectAndBroadcastEverything(store.getState())
        } else {
          store.dispatch({ type: "RECEIVE_UPDATE", payload: data.msg })
          selectors.selectAndBroadcastEverything(store.getState())
        }
      }

    },
    openSession:() => {
      const sessionId = store.getState().get("sessionId");
      ws.send(JSON.stringify({ join: `session-${sessionId}` }));
      ws.send(JSON.stringify({ join: `session-${sessionId}-user-5f48a50a6f5e6f4ecb568e56` }));
      return ws.send(JSON.stringify({
        msg: {load: true},
        room: `session-${sessionId}-user-5f48a50a6f5e6f4ecb568e56`
      }))
    },
    ping: () => {
      return ws.send(JSON.stringify({msg: "ping"}));
    },
    load: () => {
      const sessionId = store.getState().get("sessionId");

      ws.send(JSON.stringify({ join: `session-${sessionId}` }));
      ws.send(JSON.stringify({ join: `session-${sessionId}-user-5f48a50a6f5e6f4ecb568e56` }));
      return ws.send(JSON.stringify({
        msg: {load: true},
        room: `session-${sessionId}-user-5f48a50a6f5e6f4ecb568e56`
      }))
    },
    enqueue: (commands) => {
      const sessionId = store.getState().get("sessionId");
      return ws.send(JSON.stringify({
        msg: {enqueue: commands},
        room: `session-${sessionId}-user-5f48a50a6f5e6f4ecb568e56`
      }))
    },
    send: (message) => {
      const sessionId = store.getState().get("sessionId");
      ws.send(JSON.stringify({
        msg: message,
        room: `session-${sessionId}-user-5f48a50a6f5e6f4ecb568e56`
      }))
    },

    websocket: ws
  }
}
