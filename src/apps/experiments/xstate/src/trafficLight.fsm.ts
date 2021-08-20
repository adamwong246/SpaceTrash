import { createMachine, assign } from "xstate";

const pedestrianStates = {
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
};

const lightMachine = createMachine(
  {
    id: "light",
    key: "light",
    initial: "green",
    states: {
      blinking: {
        on: {
          POWER_RESTORED: { target: "red" },
        },
      },
      green: {
        on: {
          TIMER: { target: "yellow" },
          POWER_OUTAGE: { target: "blinking" },
        },
      },
      yellow: {
        on: {
          TIMER: { target: "red" },
          POWER_OUTAGE: { target: "blinking" },
        },
      },
      red: {
        on: {
          TIMER: { target: "green" },
          POWER_OUTAGE: { target: "blinking" },
        },
        ...pedestrianStates,
      },
    },
  },

  {
    // actions: { addWater, dumpWater },
    // guards: { glassIsFull },
  }
);

export default lightMachine;
