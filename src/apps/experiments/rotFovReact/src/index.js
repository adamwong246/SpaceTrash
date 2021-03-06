// index.js
// Adam Wong 2020
// 
// This is the root of the application. It handles
// - the binding of the react app to the dom
// - the routing
// - the landing page
// - re-rendering on state change

import React from 'react'
import ReactDOM from 'react-dom'
// import {
//   HashRouter as Router, // hashrouter is easier but looks weird.
//   Switch,
//   Route
// } from "react-router-dom";

// Make CSS sane across browsers
// import 'normalize.css';

// import newOrder from "./components/newOrder/component.js";
// import orders from "./components/orders/component.js";
import storeCreator from "./state/store.js";
import initialState from "./state/initialState.js";
// import Navigation from "./view/Navigation.js";

// Add our own styling. We could use modules but it's not necessary.
// import './style.scss';

// create the redux store
const store = storeCreator(initialState);

// We wrap these top level component in a function so we can attach the store.dispatch callback
// const NewOrder = newOrder(store.dispatch)
// const Orders = orders(store.dispatch)

import App from "./App.js";

// when the page is ready...
document.addEventListener('DOMContentLoaded', (event) => {

  // we will insert the react app into the element of ID 'root'
  const wrapper = document.getElementById("root");

  // whenever the store changes...
  store.subscribe(() => {

    // get the updated state of the app
    const storeState = store.getState();

    // insert the React app into the DOM
    wrapper
      ? ReactDOM.render(
        <App storeState={storeState}/>, wrapper)
      : false;
  })

  // Dispatch something to trigger the initial render. The subscriber will listen for future changes. 
  store.dispatch({ type: "INITIALIZE" })

})