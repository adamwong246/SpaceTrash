import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import initSubscriber from 'redux-subscriber';
import * as Promise from "bluebird";

import {send} from "./client-ipc.js";
import store from "./redux/store";
import { NEW_COMMAND, DRONE_ROTATE, SET_COMMAND_LINE_FOCUS } from "./redux/actionTypes.js"
import App from "./App.tsx"

const wrapper = document.getElementById("app");
wrapper
  ? ReactDOM.render(<Provider store={store}>
    <App
      newCommand={(command) => store.dispatch(NEW_COMMAND, command)}
    />
  </Provider >, wrapper)
  : false;

// set the focus to the command bar on boot
store.dispatch({ type: SET_COMMAND_LINE_FOCUS, payload: {} });

// listen for keypresses to shift+':'
document.body.onkeydown = (function(ev) {
  var key;
  var isShift;
  if (window.event) {
    key = (window.event as KeyboardEvent).keyCode;
    isShift = !!(window.event as KeyboardEvent).shiftKey; // typecast to boolean
  } else {
    key = ev.which;
    isShift = !!ev.shiftKey;
  }
  if (isShift) {
    switch (key) {
      case 16: // ignore shift key
        break;
      default:
        if (key === 186) {
          store.dispatch({ type: SET_COMMAND_LINE_FOCUS, payload: {} })
          event && event.preventDefault()
        }
        break;
    }
  }
});


const subscribe = initSubscriber(store);

// Listen to the clock and run queded commnads
//////////////////////////////////////////////////////////////////////

let tockPromise = new Promise((res, rej) => {
  store.dispatch({ type: 'UPDATE_CLOCK', payload: {} })
  res();
});

const clock = () => {
  if (tockPromise.isPending()) {

    Promise.resolve(tockPromise)
  }
  tockPromise = new Promise((res, rej) => {
    store.dispatch({ type: 'UPDATE_CLOCK', payload: {} })
    res();
  });
};

// start the clock
let tick = window.setInterval(clock, 1);

const tock = subscribe('clock.time', state => {

  if(state.clock.halted){

  } else {

    store.dispatch({type: 'HALT', payload: {} })

    const now = Date.now()
    const quededCommands = state.world.drones.map(
      (d) => d.commandQueue.filter(
        (cq) => cq.timestamp < now
      )
    ).flat()



    if (quededCommands.length){
      store.dispatch({type: 'CLEAR_QUEUE', payload: now })
      quededCommands.forEach((qc) => {
        store.dispatch({type: qc.futureAction, payload: {id: qc.id} })
      })
    }

    store.dispatch({type: 'RESUME', payload: {} })
  }
});


// Listen for changes to world and send them over IPC to server
//////////////////////////////////////////////////////////////////////

let updatePromise = Promise.resolve();

subscribe('world', state => {
  if(state.clock.halted){

  } else {

    store.dispatch({type: 'HALT', payload: {} })

    updatePromise = send('materializeMap', {
        drones: state.world.drones,
        ship: state.world.ship,
        droneWithActiveVideoId: state.world.droneWithActiveVideo
        } ).then((v) => {
        store.dispatch({type: 'SET_MATERIALIZED_WORLD', payload: {map: v.materializeMap, screen: v.screenStrips}})
      }).catch((e) => {
        console.error(e)
      }).finally(() => {
          store.dispatch({type: 'RESUME', payload: {} })
      })
  }

});

store.dispatch({type: 'SET_VIDEO', payload: 0})
