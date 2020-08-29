const http = require('http');
const WebSocket = require('ws');

export default () => {

  var ws = new WebSocket('ws://localhost:5000');
  ws.onerror = function(e) { console.log(`onerror: ${JSON.stringify(e)}`) }
  ws.onclose = function(e) { console.log(`onclose: ${JSON.stringify(e)}`) }
  ws.onopen = function(e) {
    console.log(`onopen: ${JSON.stringify(e)}`)
  }

  ws.onmessage = function(e) {
    const data = JSON.parse(e.data)
    console.log(`onmessage`, data)
  }

  return {
    ping: () => {
      return ws.send(JSON.stringify({msg: "ping"}));
    },
    websocket: ws
  }
}
