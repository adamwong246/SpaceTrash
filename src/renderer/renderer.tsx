import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

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

window.setInterval(() => {
  store.dispatch({ type: 'UPDATE_CLOCK', payload: {} })
}
, 1000);

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
