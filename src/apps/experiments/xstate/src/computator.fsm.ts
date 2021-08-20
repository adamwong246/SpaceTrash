import { createMachine, assign } from "xstate";

enum eActions {
  PED_COUNTDOWN = "PED_COUNTDOWN",
  TIMER = "TIMER",
  POWER_OUTAGE = "POWER_OUTAGE",
  POWER_RESTORED = "POWER_RESTORED",
}

const pedestrianFsm = {
  initial: "walk",
  states: {
    walk: {
      on: {
        [eActions.PED_COUNTDOWN]: { target: "wait" },
      },
    },
    wait: {
      on: {
        [eActions.PED_COUNTDOWN]: { target: "stop" },
      },
    },
    stop: {},
    blinking: {},
  },
};

const trafficLightFsm = {
  id: "lightId",
  initial: "green",
  states: {
    blinking: {
      on: {
        [eActions.POWER_RESTORED]: { target: "red" },
      },
    },
    green: {
      on: {
        [eActions.TIMER]: { target: "yellow" },
        [eActions.POWER_OUTAGE]: { target: "blinking" },
      },
    },
    yellow: {
      on: {
        [eActions.TIMER]: { target: "red" },
        [eActions.POWER_OUTAGE]: { target: "blinking" },
      },
    },
    red: {
      on: {
        [eActions.TIMER]: { target: "green" },
        [eActions.POWER_OUTAGE]: { target: "blinking" },
      },
      // ...pedestrianFsm,
    },
  },
};

// // Action to increment the context amount
// const addWater = assign({
//   amount: (context, event) => {
//     return (context.amount || 0) + 1;
//   },
// });

// const dumpWater = assign({
//   amount: 0,
// });

const addWater = {
  amount: (context, event) => {
    console.log('addWater amount', context);
    return (context.amount || 0) + 1;
  },
};
const dumpWater = {
  amount: 0,
};

// Guard to check if the glass is full
function glassIsFull(context, event) {
  return context.amount >= 10;
}

const glassFsm = {
  id: "glass",
  context: {
    amount: 0,
  },
  initial: "empty",
  states: {
    empty: {
      on: {
        FILL: {
          target: "filling",
          actions: addWater,
        },
      },
    },
    filling: {
      always: {
        target: "full",
        cond: glassIsFull,
      },
      on: {
        DUMP: {
          target: "empty",
          actions: dumpWater,
        },
        FILL: {
          target: "filling",
          actions: addWater,
        },
      },
    },
    full: {},
  },
};

const installFsm = (fsm, path: string, rawActions) => {
  const states = {};
  Object.entries(fsm.states).forEach(([k, v]: [string, any]) => {
    const state = { ...fsm.states[k] };
    const ons = state.on || {};
    const newOn = {};
    Object.entries(ons).forEach(([k2, v2]: [string, any]) => {
      newOn[`${k2}.${path}`] = ons[k2];
    });
    state.on = newOn;
    const alwayss = state.always;
    state.always = alwayss;
    states[k] = state;
  });

  const context = { [path]: fsm.context };

  const actions = {};
  Object.entries(rawActions || []).forEach(([k2, v2]: [string, any]) => {
    
    // newOn[`${k2}.${path}`] = ons[k2];
    const action = rawActions[k2];
    // return () => assign(action);
    console.log("hello", k2)
    actions[k2] = () => {
      
      assign(action);
    }
  });

  return {
    ...fsm,
    id: `${path}.${fsm.id}`,
    states,
    context,
    actions,
  };
};

type ComputatorContext = {
  time: number;
};

const context: ComputatorContext = {
  time: 0,
};

const upcount = assign({
  time: (context: ComputatorContext, event) => context.time + 1,
});

const drinkingGlassZero = installFsm({ ...glassFsm }, "drinking glass 0", { addWater, dumpWater });
const drinkingGlassOne = installFsm({ ...glassFsm }, "drinking glass 1", { addWater, dumpWater });
const drinkingGlassTwo = installFsm({ ...glassFsm }, "drinking glass 2", { addWater, dumpWater });

const computatorFsm = {
  id: "computatorMachine",
  parallel: true,
  key: "computatorMachine",
  initial: "main",
  context,
  states: {
    main: {
      on: {
        TICK: {
          target: "main",
          actions: upcount,
        },
      },
    },

    ["drinking glass 0"]: drinkingGlassZero,
    ["drinking glass 1"]: drinkingGlassOne,
    ["drinking glass 2"]: drinkingGlassTwo,
  },
};

console.log(JSON.stringify(computatorFsm, null, 2));

const computatorMachine = createMachine(
  computatorFsm,
  {
    actions: { upcount, addWater, dumpWater },
    guards: { glassIsFull },
  }
);

export default computatorMachine;
