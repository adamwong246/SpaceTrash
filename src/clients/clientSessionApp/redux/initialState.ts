import * as React from "react";

export default {
  loadState: {},
  commandQueues: {},
  terminalLines: [
    "booting spaceTrash session terminal",

  ],
  clock: {
    time: Date.now(),
    lastTime: 0,
    halted: false,
  },

  userGeneratedView: null,

  usr: {},

  userScripts: null

};