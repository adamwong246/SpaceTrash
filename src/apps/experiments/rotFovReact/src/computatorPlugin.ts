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

export default createMachine(
  {
    id: 'computator',
    // the initial context (extended state) of the statechart
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
        // Transient transition
        always: {
          target: 'full',
          cond: 'glassIsFull'
        },
        on: {
          FILL: {
            target: 'filling',
            actions: 'addWater'
          },
          DUMP: {
            target: 'empty',
            actions: 'dumpWater'
          }
        }
      },
      full: {
        on: {
          DUMP: {
            target: 'empty',
            actions: 'dumpWater'
          }
        }
      }
    }
  },
  {
    actions: { addWater, dumpWater },
    guards: { glassIsFull }
  }
);
