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
    init: (selector) => {

      ws.onmessage = function(e) {
        const data = JSON.parse(e.data)
        console.log(`onmessage`, data)

        if (data.msg === "user joined") {
          // store.dispatch({ type: "NEW_COMMAND", payload: "connection established" })
        } else {
          console.log(store.getState())
          store.dispatch({ type: "RECEIVE_UPDATE", payload: data.msg })
          // selector(store.getState())
          // console.log(selector(store.getState()))
          console.log(store.getState())
          selector(store.getState())
        }
        // console.log(store.getState())
        //

      }

    },
    ping: () => {
      return ws.send(JSON.stringify({msg: "ping"}));
    },
    load: () => {
      ws.send(JSON.stringify({ join: "session-5f48a56a6f5e6f4ecb568e5a" }));
      ws.send(JSON.stringify({ join: "session-5f48a56a6f5e6f4ecb568e5a-user-5f48a50a6f5e6f4ecb568e56" }));
      return ws.send(JSON.stringify({
        msg: {load: true},
        room: "session-5f48a56a6f5e6f4ecb568e5a-user-5f48a50a6f5e6f4ecb568e56"
      }))
    },
    enqueue: (commands) => {
      return ws.send(JSON.stringify({
        msg: {enqueue: commands},
        room: "session-5f48a56a6f5e6f4ecb568e5a-user-5f48a50a6f5e6f4ecb568e56"
      }))
    },
    send: (message) => {
      ws.send(JSON.stringify({
        msg: message,
        room: "session-5f48a56a6f5e6f4ecb568e5a-user-5f48a50a6f5e6f4ecb568e56"
      }))
    },

    websocket: ws
  }
}
