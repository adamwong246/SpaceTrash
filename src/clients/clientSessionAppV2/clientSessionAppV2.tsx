import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from "./redux/store";

import App from "./App.tsx"

import { NEW_COMMAND, LOAD_GAME_STATE } from "./redux/actionTypes.js"

var timeflag = Date.now()

var ws = new WebSocket('ws://localhost:5000');
ws.onerror = function(e) { console.log(`onerror: ${JSON.stringify(e)}`) }
ws.onclose = function(e) { console.log(`onclose: ${JSON.stringify(e)}`) }
ws.onopen = function(e) {
  store.dispatch({ type: "NEW_COMMAND", payload: "establishing connection to spaceTrash server..." })
  console.log(`onopen: ${JSON.stringify(e)}`)
  bootApp(document.getElementById("app"))
}

ws.onmessage = function(e) {
  const data = JSON.parse(e.data)
  console.log(`onmessage`, data)

  if (data.msg === "user joined") {
    store.dispatch({ type: "NEW_COMMAND", payload: "connection established" })
  }

  console.log("mark3")
  if (data.room) {
    console.log("mark2")
    const roomsAddress = data.room.split('-')
    if (roomsAddress[0] === 'session') {
      console.log("mark1", roomsAddress[2])

      if (roomsAddress[2] === 'user') {
        console.log("timeflag: ", data.timestamp - timeflag)
        timeflag = data.timestamp
        console.log("mark0")
        store.dispatch({ type: "RECEIVE_UPDATE", payload: data.msg })

      }
    }
  }
}

function broadcast(msg, room) {
  console.log(`broadcast: ${JSON.stringify(msg)}, ${room}`)
  ws.send(JSON.stringify({ room: room, msg: msg, timestamp: Date.now() }))
}

function join(room) {
  console.log(`join: ${room}`)
  ws.send(JSON.stringify({ join: room }));
}

function bootApp(wrapper) {

  const sessionId = wrapper.dataset.sessionId
  const userId = wrapper.dataset.userId

  const broadcaster = (command, droneId) => {
    return broadcast(   {command, droneId}   , `session-${sessionId}-user-${userId}`)
  }

  ReactDOM.render(<Provider store={store}>
    <App
      broadcaster={broadcaster}
    />
  </Provider >, wrapper)

  const roomsAddress = `session-${sessionId}-user-${userId}`
  join(roomsAddress)
  broadcast({ load: true }, roomsAddress, userId)

}
