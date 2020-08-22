import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from "./redux/store";

import App from "./App.tsx"
import loop from "./loop.ts"

import { NEW_COMMAND, LOAD_GAME_STATE } from "./redux/actionTypes.js"

var ws = new WebSocket('ws://localhost:5000');
ws.onerror = function(e) { console.log(`onerror: ${JSON.stringify(e)}`) }
ws.onclose = function(e) { console.log(`onclose: ${JSON.stringify(e)}`) }
ws.onopen = function(e) {
  store.dispatch({type: "NEW_COMMAND", payload: "establishing connection to spaceTrash server..."})
  console.log(`onopen: ${JSON.stringify(e)}`)
  bootApp(document.getElementById("app"))
}

ws.onmessage = function(e) {
  const data = JSON.parse(e.data)
  console.log(`onmessage`, data)

  if(data.msg === "user joined"){
    store.dispatch({type: "NEW_COMMAND", payload: "connection established"})
  }

  if (data.room) {
    const roomsAddress = data.room.split('-')
    if (roomsAddress[0] === 'session') {
      if (roomsAddress[2] === 'user') {

        console.log(data)
        store.dispatch({ type: LOAD_GAME_STATE, payload: data.msg })
        store.dispatch({type:"OBSERVE_DRONES_RAYS", payload:data.msg })

      }
    }
  }
}

function send(msg) {
  console.log(`send: ${msg}`)
  ws.send(JSON.stringify({ msg: msg }));
}

function broadcast(msg, room, user) {
  console.log(`broadcast: ${JSON.stringify(msg)}, ${room}, ${user}`)
  ws.send(JSON.stringify({ room: room, msg: msg, user: user }))
}

function join(room) {
  console.log(`join: ${room}`)
  ws.send(JSON.stringify({ join: room }));
}

function bootApp(wrapper) {

  const sessionId = wrapper.dataset.sessionId
  const userId = wrapper.dataset.userId

  ReactDOM.render(<Provider store={store}>
    <App
      newCommand={(command) => store.dispatch(NEW_COMMAND, command)}
      broadcast={(msg) => { broadcast(msg, `session-${sessionId}-user-${userId}`, userId) }}
    />
  </Provider >, wrapper)


  join(`session-${sessionId}`)
  join(`session-${sessionId}-user-${userId}`)
  broadcast({ load: true }, `session-${sessionId}-user-${userId}`, userId)

  loop(store, (payload) => broadcast(payload, `session-${sessionId}-user-${userId}`, userId) )
}
