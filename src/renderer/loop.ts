import * as Promise from "bluebird";
import initSubscriber from 'redux-subscriber';
import * as ActionTypes from "./redux/actionTypes";
const safeEval = require('safe-eval')

import CommandParser from "./lib/CommandParser.ts";
import { send } from "./client-ipc.js";

export default (store) => {
const subscribe = initSubscriber(store);

// Listen to the clock and run queded commnads
//////////////////////////////////////////////////////////////////////

let tockPromise = new Promise((res, rej) => {
  store.dispatch({ type: 'UPDATE_CLOCK', payload: {} })
  res();
});

const clock = () => {
  if (tockPromise.isPending()) {

    Promise.resolve(tockPromise)
  }
  tockPromise = new Promise((res, rej) => {
    store.dispatch({ type: 'UPDATE_CLOCK', payload: {} })
    res();
  });
};

// start the clock
let tick = window.setInterval(clock, 1);

let updatePromise = Promise.resolve();

const tock = subscribe('clock.time', state => {

  const now = Date.now();

  if (!state.clock.halted) {

    if(state.computer.commandLine.commandToSubmit){
      const command = state.computer.commandLine.commandToSubmit
      store.dispatch({ type: 'UNSET_COMMAND_TO_SUBMIT', payload: {} })

      const script = state.computer.scripts[state.computer.keybindings[state.computer.keybinding.code]]

      CommandParser.parse(store.dispatch, command, state)
    }

    if(state.computer.keybinding.active){
      store.dispatch({ type: 'KEY_BINDING_DEACTIVATE', payload: {} })

      const script = state.computer.scripts[state.computer.keybindings[state.computer.keybinding.code]]

      if (script){
        const context = {
          exec: (action, payload) => {
            store.dispatch({ type: ActionTypes.DRONE_QUEUE, payload: {futureAction: action, payload: payload.id} })
          },
          log: (x) => store.dispatch({ type: ActionTypes.NEW_COMMAND, payload: x })

        }
        var evaluated = safeEval(script, context)
        const ran = evaluated([], state)

        store.dispatch({ type: ActionTypes.SET_COMMAND_WARNING, payload:  ran })
      }
    }

    const drones = state.drones.map((drone) => {
      const idealDrone = state.idealizedWorld.drones.find((idealDrone) => idealDrone.id === drone.id)
      const realDrone = state.realizedWorld.drones.find((realDrone) => realDrone.id === drone.id)
      return {
        ...drone,
        x: realDrone.x || idealDrone.x,
        y: realDrone.y || idealDrone.y,
        direction: realDrone.direction || idealDrone.direction,
        commandQueue: idealDrone.commandQueue.filter((cq) => cq.timestamp < now)
      }
    })

    const commands = drones.map((drone) => drone.commandQueue).flat()

    if(commands.length || state.clock.lastTime === 0){
      store.dispatch({ type: 'HALT', payload: {} })

      updatePromise = send('materializeMap', drones)
        .then((materializedWorld) => {
          store.dispatch({ type: 'SET_REALIZED_WORLD', payload: materializedWorld })
          store.dispatch({ type: 'CLEAR_QUEUE', payload: now })
        }).catch((e) => {
          console.error(e)
        }).finally(() => {
          store.dispatch({ type: 'RESUME', payload: {} })
        })
    }


  } else {
    //  do nothing
  }

});
}
