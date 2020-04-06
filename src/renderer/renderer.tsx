import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import initSubscriber from 'redux-subscriber';
import * as Promise from "bluebird";
const safeEval = require('safe-eval')

import { send } from "./client-ipc.js";
import store from "./redux/store";
import { NEW_COMMAND, DRONE_ROTATE, SET_COMMAND_LINE_FOCUS } from "./redux/actionTypes.js"
import * as ActionTypes from "./redux/actionTypes";
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
  } else {
    console.log('press', key)

    store.dispatch({ type: 'KEY_BINDING_ACTIVATE', payload: key })



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

let updatePromise = Promise.resolve();

const tock = subscribe('clock.time', state => {

  const now = Date.now();

  if (!state.clock.halted) {

    if(state.computer.keybinding.active){
      store.dispatch({ type: 'KEY_BINDING_DEACTIVATE', payload: {} })

      const script = state.computer.scripts[state.computer.keybindings[state.computer.keybinding.code]]

      if (script){
        const context = {
          exec: (action, payload) => {
            store.dispatch({ type: ActionTypes.DRONE_QUEUE, payload: {futureAction: action, payload: payload.id} })
          },
          log: (x) => store.dispatch({ type: ActionTypes.NEW_COMMAND, payload: x })

        }
        var evaluated = safeEval(script, context)
        const ran = evaluated([], state)

        store.dispatch({ type: ActionTypes.SET_COMMAND_WARNING, payload:  ran })
      }


    }


    const drones = state.drones.map((drone) => {
      const idealDrone = state.idealizedWorld.drones.find((idealDrone) => idealDrone.id === drone.id)
      const realDrone = state.realizedWorld.drones.find((realDrone) => realDrone.id === drone.id)
      return {
        ...drone,
        x: realDrone.x || idealDrone.x,
        y: realDrone.y || idealDrone.y,
        direction: realDrone.direction || idealDrone.direction,
        commandQueue: idealDrone.commandQueue.filter((cq) => cq.timestamp < now)
      }
    })

    const commands = drones.map((drone) => drone.commandQueue).flat()

    if(commands.length){
      store.dispatch({ type: 'HALT', payload: {} })

      updatePromise = send('materializeMap', drones)
        .then((materializedWorld) => {
          store.dispatch({ type: 'SET_REALIZED_WORLD', payload: materializedWorld })
          store.dispatch({ type: 'CLEAR_QUEUE', payload: now })
        }).catch((e) => {
          console.error(e)
        }).finally(() => {
          store.dispatch({ type: 'RESUME', payload: {} })
        })
    }


  } else {
    //  do nothing
  }

});


// subscribe('computer.keybinding.code', state => {
//   console.log(state.computer.keybinding)
//
//
//
//
//
//
// })
