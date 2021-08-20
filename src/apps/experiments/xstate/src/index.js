import { interpret } from "xstate";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App.ts";
import fsmApp from "./computator.fsm";

document.addEventListener("DOMContentLoaded", (event) => {
  const interpreter = interpret(fsmApp)
    .onStop((context, prevContext) => {
      console.log("onSend");
      console.log(" context", context);
      console.log(" prevContext", prevContext);
    })
    .onSend((context, prevContext) => {
      console.log("onSend");
      console.log(" context", context);
      console.log(" prevContext", prevContext);
    })
    .onEvent((context, prevContext) => {
      console.log("onEvent");
      console.log(" context", context);
      console.log(" prevContext", prevContext);
    })
    .onDone((context, prevContext) => {
      console.log("onDone");
      console.log(" context", context);
      console.log(" prevContext", prevContext);
    })
    .onTransition((value, context) => {
      console.log("onTransiion");
      console.log(" value", value);
      console.log(" context", context);
    })
    .onChange((context, prevContext) => {
      console.log("onChange");
      console.log(" context", context);
      console.log(" prevContext", prevContext);

      ReactDOM.render(
        React.createElement(
          App, {
            storeState: {
              machine: fsmApp,
              context,
              value: interpreter.state.value,
              nextEventsDump: interpreter.state.nextEvents,
              nextEvents: interpreter.state.nextEvents.filter((f) => f !== ""),
              fire: (e) => {
                console.log("fire", e)
                interpreter.send(e)
              }
            },
          },
          ""
        ),
        document.getElementById("root")
      );

    })


  interpreter.start();
});