import { createMachine, assign, spawn } from "xstate";

const context = {
  time: 0,
  logs: [],
};

const addLog = assign({
  logs: (context, event) => {
    return context.logs.concat([event.payload]);
  },
});

const addPlayer = assign({
  players: (context, event) => {
    return [spawn(createMachine({
      initial: "walk",
      states: {
        walk: {
          on: {
            PED_COUNTDOWN: { target: "wait" },
          },
        },
        wait: {
          on: {
            PED_COUNTDOWN: { target: "stop" },
          },
        },
        stop: {},
        blinking: {},
      },
    }))]
    // return context.logs.concat([event.payload]);
  },
});

const directorMachine = () => {
  return createMachine({
    id: "rogueState",
    key: "Rogue State",
    context,
    initial: "pregame",

    on: {
      SPEAK: {
        actions: addLog,
      },
    },

    states: {
      pregame: {
        on: {
          GREEN_FLAG: { target: "running" },
          ADD_PLAYER: {
            target: "pregame",
            actions: addPlayer
          },
        },
      },
      running: {
        on: {
          TICK: { target: "running" },
          // ADD_SPECTATOR: { target: "running" },
          CHECKERED_FLAG: { target: "postgame" },
        },
      },
      postgame: {
        type: "final",
      },
    },
  });
  
};

export default directorMachine();
