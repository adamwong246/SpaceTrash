export default {
  loadState: {},
  commandQueues: {},
  terminalLines: [
    "spaceTrash terminal v0.0.5 loading...",
  ],
  clock: {
    time: Date.now(),
    lastTime: 0,
    halted: false,
  },

  userGeneratedView: null,

  usr: {}
};
