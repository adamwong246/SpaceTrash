import { createMachine, assign } from 'xstate';

// Action to increment the context amount
const addWater = assign({
  amount: (context, event) => context.amount + 1
});

const dumpWater = assign({
  amount: 0
});

// Guard to check if the glass is full
function glassIsFull(context, event) {
  return context.amount >= 10;
}

const glassMachine = createMachine(
  {
    id: 'glass',
    context: {
      amount: 0
    },
    initial: 'empty',
    states: {
      empty: {
        on: {
          FILL: {
            target: 'filling',
            actions: 'addWater'
          }
        }
      },
      filling: {
        always: {
          target: 'full',
          cond: 'glassIsFull'
        },
        on: {
          DUMP: {
            target: 'empty',
            actions: 'dumpWater'
          },
          FILL: {
            target: 'filling',
            actions: 'addWater'
          }
        }
      },
      full: {}
    }
  },
  {
    actions: { addWater, dumpWater },
    guards: { glassIsFull }
  }
);

export default glassMachine;