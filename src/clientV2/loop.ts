import * as Promise from "bluebird";
import initSubscriber from 'redux-subscriber';
import * as ActionTypes from "./redux/actionTypes";
const safeEval = require('safe-eval')

import CommandParser from "./lib/CommandParser.ts";

export default (store, broadcaster) => {
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
  let tick = window.setInterval(clock, 100);

  let updatePromise = Promise.resolve();

  const tock = subscribe('clock.time', state => {

    const now = Date.now();

    if (!state.clock.halted) {
      const commandQueues = state.commandQueues;
      const recentCommandQueues = {};

      Object.keys(commandQueues).forEach((k) => {
        const recentCommands = commandQueues[k].filter((c) => c.timestamp < now)

        if(recentCommands.length){
          recentCommandQueues[k] = recentCommands
        }
      })

      if(Object.keys(recentCommandQueues).length){
          broadcaster({commandQueues: recentCommandQueues})
          store.dispatch({ type: 'CLEAR_STALE_QUEUE_COMMANDS', payload: now })
      }

    } else {
      //  do nothing
    }

  });
}
