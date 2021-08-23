import { interpret, spawn } from "xstate";
import React from "react";
import ReactDOM from "react-dom";

import ReactApp from "./App.ts";
import RogueStateFsm from "./rogueStateV2.ts";
import gameConfig from "./firstGame.rs.ts";

document.addEventListener("DOMContentLoaded", (event) => {
  const directorActor = spawn(RogueStateFsm);
  const directorInterpreter = interpret(RogueStateFsm)
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
          ReactApp, {
            directorActor,
            directorInterpreter,
            machine: RogueStateFsm,
            context,
            value: directorInterpreter.state.value,
            nextEvents: directorInterpreter.state.nextEvents.filter((f) => f !== ""),
            gameConfig,
            fire: (e) => {
              console.log("fire", e);
              directorInterpreter.send(e);
            },
            fireV2: (a, b) => {
              console.log("fire v2", a, b);
            },
          },
          ""
        ),
        document.getElementById("root")
      );
    });

  directorInterpreter.start();

});

// directorActor.subscribe((e) => {
//   console.log("doof")
// })

// const createDirector = (gameConfig) => {
//   const directorMachine = directorMachiner();

//   const interpreter: Interpreter<any> = interpret(directorMachine)
//     .onStop((context, prevContext) => {
//       console.log("onStop director");
//       console.log(" context", context);
//       console.log(" prevContext", prevContext);
//     })
//     .onSend((context, prevContext) => {
//       console.log("onSend director");
//       console.log(" context", context);
//       console.log(" prevContext", prevContext);
//     })
//     .onEvent((context, prevContext) => {
//       console.log("onEvent director");
//       console.log(" context", context);
//       console.log(" prevContext", prevContext);
//     })
//     .onDone((context, prevContext) => {
//       console.log("onDone director");
//       console.log(" context", context);
//       console.log(" prevContext", prevContext);
//     })
//     .onTransition((value, context) => {
//       console.log("onTransiion director");
//       console.log(" value", value);
//       console.log(" context", context);
//     })
//     .onChange((context, prevContext) => {
//       console.log("onChange director");
//       console.log(" context", context);
//       console.log(" prevContext", prevContext);
//     }).start();

//   const director: ActorRef<any> = spawn(directorMachine, "DIRECTOR");
//   director.subscribe((next: {value: any}) => {
//     console.log('poot');
//   });

//   return {
//     director,
//     interpreter
//   };
// };