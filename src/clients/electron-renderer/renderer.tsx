import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import App from "./App.tsx"
import {send} from "./client-ipc.js";

console.log("renderer.tsx")

console.log("pinging...")
send('ping', {} ).then((v) => {
  console.log('then ping')
}).catch((e) => {
  console.log('catch ping')
}).finally(() => {
  console.log('finally ping')
})

send('ping2', {} ).then((v) => {
  console.log('then ping2')
}).catch((e) => {
  console.log('catch ping2')
}).finally(() => {
  console.log('finally ping2')
})


const wrapper = document.getElementById("app");
wrapper
  ? ReactDOM.render(<App/>, wrapper)
  : false;
