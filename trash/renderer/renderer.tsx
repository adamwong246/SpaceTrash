import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from "./redux/store";

import { NEW_COMMAND, DRONE_ROTATE, SET_COMMAND_LINE_FOCUS } from "./redux/actionTypes.js"

import App from "./App.tsx"

import keybinder from "./keybinder.ts";
import loop from "./loop.ts";

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

keybinder(store);
loop(store)

store.dispatch({ type: 'SET_VIDEO', payload: 0 })
