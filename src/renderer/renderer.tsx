import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import initSubscriber from 'redux-subscriber';
import {Promise} from "bluebird";

import store from "./redux/store";
import { NEW_COMMAND, DRONE_ROTATE, SET_COMMAND_LINE_FOCUS } from "./redux/actionTypes.js"
import App from "./App.tsx"

import {getTime} from './redux/selectors.js';

const wrapper = document.getElementById("app");
wrapper
  ? ReactDOM.render(<Provider store={store}>
    <App
      newCommand={(command) => store.dispatch(NEW_COMMAND, command)}
    />
  </Provider >, wrapper)
  : false;

store.dispatch({ type: SET_COMMAND_LINE_FOCUS, payload: {} });

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


///////////////////////////////////


let tockPromise = new Promise((res, rej) => {
  store.dispatch({ type: 'UPDATE_CLOCK', payload: {} })
  res();
});


const clock = () => {
  console.log('tick')

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


let updatePromise = new Promise((res, rej) => {
  store.dispatch({type: 'CLEAR_QUEUE', payload: Date.now() })
  res();
});

// the main loop
const subscribe = initSubscriber(store);
const tock = subscribe('clock.time', state => {

  if(state.clock.halted){

  } else {

    store.dispatch({type: 'HALT', payload: {} })

    const now = Date.now()
    const quededCommands = state.drones.map(
      (d) => d.commandQueue.filter(
        (cq) => cq.timestamp < now
      )
    ).flat()

    store.dispatch({type: 'CLEAR_QUEUE', payload: now })

    if (quededCommands.length){
      quededCommands.forEach((qc) => {
        store.dispatch({type: qc.futureAction, payload: {id: qc.id} })
      })
    }

    store.dispatch({type: 'RESUME', payload: {} })


  }



});
