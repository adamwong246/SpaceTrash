import { createMachine, assign } from "xstate";


const countdownSize = 3;

const downcount = assign({
  countdown: (context, event) => context.countdown - 1,
});

const resetCountdown = assign({
  countdown: (c, e) => countdownSize,
});

function countdownIsZero(context, event) {
  return context.countdown === 0;
}

function countdownIsNotZero(context, event) {
  return context.countdown > 0;
}

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
    id: "traffixlightV2",
    key: "traffixlightV2",
    initial: "green",
    context: {
      countdown: countdownSize,
    },
    states: {
      blinking: {
        on: {
          POWER_RESTORED: { target: "red" },
        },
      },
      green: {
        on: {
          TIMER: {
            actions: "downcount",
            cond: countdownIsNotZero,
          },
          YELLOW: {
            target: "yellow",
            cond: countdownIsZero,
            actions: resetCountdown,
          },
          POWER_OUTAGE: { target: "blinking" },
        },
      },
      yellow: {
        on: {
          TIMER: {
            actions: "downcount",
            cond: countdownIsNotZero,
          },
          RED: {
            target: "red",
            cond: countdownIsZero,
            actions: resetCountdown,
          },
          POWER_OUTAGE: { target: "blinking" },
        },
      },
      red: {
        on: {
          TIMER: {
            actions: "downcount",
            cond: countdownIsNotZero,
          },
          GREEN: {
            target: "green",
            cond: countdownIsZero,
            actions: resetCountdown,
          },
          POWER_OUTAGE: { target: "blinking" },
        },
        // ...pedestrianStates,
      },
    },
  },

  {
    actions: { downcount, resetCountdown },
    guards: { countdownIsZero },
  }
);

export default lightMachine;
