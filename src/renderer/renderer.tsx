/**
 * React renderer.
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Provider} from 'react-redux'
import store from "./redux/store";

import {NEW_COMMAND, DRONE_ROTATE} from "./redux/actionTypes.js"
import App from "./App.tsx"

const wrapper = document.getElementById("app");
wrapper
  ? ReactDOM.render(<Provider store={store}>
    <App newCommand={(command) => store.dispatch(NEW_COMMAND, command)}/>
  </Provider >, wrapper)
  : false;

// ReactDOM.render(<div> HELLO REACT</div>, document.getElementById('app'));

// document.write("node", process.versions.node)
// document.write("chrome", process.versions.chrome)
// document.write("electron", process.versions.electron)

// document.body.onkeydown = (function (ev) {
//   var key;
//   var isShift;
//   if (window.event) {
//     key = (window.event as KeyboardEvent).keyCode;
//     isShift = !!(window.event as KeyboardEvent).shiftKey; // typecast to boolean
//   } else {
//     key = ev.which;
//     isShift = !!ev.shiftKey;
//   }
//   if ( isShift ) {
//     switch (key) {
//       case 16: // ignore shift key
//         break;
//       default:
//         alert(key);
//         // do stuff here? code 816
//         break;
//     }
//   }
// });
