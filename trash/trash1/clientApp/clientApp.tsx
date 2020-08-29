import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from "./redux/store";

import App from "./App.tsx"

window.onload = (event) => {

  const wrapper = document.getElementById("app");
  wrapper
    ? ReactDOM.render(<Provider store={store}>
      <App
        newCommand={(command) => store.dispatch("NEW_COMMAND", command)}
        broadcast={(msg) => { broadcast(msg, `session-${sessionId}-user-${userId}`, userId) }}
      />
    </Provider >, wrapper)
    : alert("no");

};
