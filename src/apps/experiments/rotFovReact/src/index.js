// import React from 'react'
// import ReactDOM from 'react-dom'
import { render } from 'inferno';
import {createElement} from 'inferno-create-element';

import storeCreator from "./state/store.js";
import initialState from "./state/initialState.js";

// create the redux store
const store = storeCreator(initialState);

import App from "./AppInferno.js";

// when the page is ready...
document.addEventListener('DOMContentLoaded', (event) => {

  // we will insert the react app into the element of ID 'root'
  const wrapper = document.getElementById("root");

  // whenever the store changes...
  store.subscribe(() => {

    // get the updated state of the app
    const storeState = store.getState();

    // insert the React app into the DOM
    // const element = createElement('span', {}, 'Hello World');
    const element = createElement(App, {storeState}, "")
    // console.log(element, wrapper)
    wrapper
      ? render(
        element, wrapper)
      : false;
  })

  // Dispatch something to trigger the initial render. The subscriber will listen for future changes. 
  store.dispatch({ type: "INITIALIZE" })

})