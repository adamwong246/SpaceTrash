import React from 'react'
import ReactDOM from 'react-dom'
// import { render } from 'inferno';
// import { createElement } from 'inferno-create-element';

import storeCreator from "./state/store.js";
import initialState from "./state/initialState.js";

// create the redux store
const store = storeCreator(initialState);

import App from "./AppInferno.ts";

// when the page is ready...
document.addEventListener('DOMContentLoaded', (event) => {

  // we will insert the react app into the element of ID 'root'
  const wrapper = document.getElementById("root");

  // whenever the store changes...
  store.subscribe(() => {
    wrapper
      ?
      ReactDOM.render(
        React.createElement(App, { storeState: store.getState() }, ""), wrapper) :
      false;
  })

  // Dispatch something to trigger the initial render. The subscriber will listen for future changes. 
  store.dispatch({ type: "INITIALIZE" })

})