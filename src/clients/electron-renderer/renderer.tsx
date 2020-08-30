import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import store from "./redux/store";
import App from "./App.tsx"
import { ipcSend, listen } from "./client-ipc.js";

import selectorsIpcFactory from "./selectors.ts";
const selectorIpc = selectorsIpcFactory(ipcSend);

const broadcaster = (commands) => {
  ipcSend('enqueue', commands).then((v) => {
    console.log('then enqueue', v)
  }).catch((e) => {
    console.log('catch enqueue')
  }).finally(() => {
    console.log('finally enqueue')
  })
}

const wrapper = document.getElementById("app");
wrapper
  ? ReactDOM.render(<Provider store={store}>
    <App
      broadcaster={broadcaster}
    />
  </Provider >, wrapper)
  : false;

listen("update", (e) => {
  store.dispatch({type: "RECEIVE_UPDATE", payload: e})
});

Window.ping = () => {
  ipcSend('load', {}).then((v) => {
    console.log('then load', v)
  }).catch((e) => {
    console.log('catch load')
  }).finally(() => {
    console.log('finally load')
  })

}
