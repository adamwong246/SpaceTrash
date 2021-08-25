import { iPlayer } from "types";
import {
  ActorRef,
  assign,
  createMachine,
  interpret,
  spawn,
  StateMachine,
} from "xstate";

interface IXstateContext {
  time: number;
  logs: [];
}

interface IXstateEvent {
  type: string;
  payload: object;
}

const context = {
  time: 0,
  logs: [],
  players: [],
};

const addLog = assign({
  logs: (context, event) => {
    return context.logs.concat([
      {
        sender: event.sender,
        message: event.payload,
      },
    ]);
  },
});

const addPlayer = assign({
  players: (context, event, payload) => {
    const fsm = {
      key: "Player",
      initial: "preGame",

      on: {
        START: { target: "wait" },
      },

      states: {
        preGame: {},

        wait: {
          on: {
            MY_MOVE: { target: "moving" },
            GAME_OVER: { target: "postGame" },
          },
        },
        moving: {
          on: {
            YOUR_MOVE: { target: "wait" },
          },
        },

        postGame: {},
      },
    };

    const machine: StateMachine<any, any, any, any> = createMachine(fsm);

    const actor: ActorRef<any, any> = spawn(machine);
    const interpreter = interpret(machine);
    interpreter.start();

    const newPlayer: iPlayer = {
      playerName: event.payload.playerName,
      machine,
      actor,
      interpreter,
      fsm,
    };

    return context.players.concat([newPlayer]);
  },
});

// const addPlayer = (context) => {
//   console.log("mark0", context);
//   return assign({
//     players: (context, event) => {
//       console.log("mark1", context.players);
//       return players
//       // return context.players.concat([
//       //   spawn(
//       //     createMachine({
//       //       initial: "walk",
//       //       states: {
//       //         walk: {
//       //           on: {
//       //             PED_COUNTDOWN: { target: "wait" },
//       //           },
//       //         },
//       //         wait: {
//       //           on: {
//       //             PED_COUNTDOWN: { target: "stop" },
//       //           },
//       //         },
//       //         stop: {},
//       //         blinking: {},
//       //       },
//       //     })
//       //   ),
//       // ]);
//     },
//   });
// };

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
            actions: addPlayer,
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

// const addPlayer = assign({
//   players: (context, event) => {
//     return [spawn(createMachine({
//       initial: "walk",
//       states: {
//         walk: {
//           on: {
//             PED_COUNTDOWN: { target: "wait" },
//           },
//         },
//         wait: {
//           on: {
//             PED_COUNTDOWN: { target: "stop" },
//           },
//         },
//         stop: {},
//         blinking: {},
//       },
//     }))]
//     // return context.logs.concat([event.payload]);
//   },
// });

// const addPlayer = (context: IXstateContext, event: IXstateEvent, machine) => {
//   spawn(createMachine({
//     initial: "walk",
//     states: {
//       walk: {
//         on: {
//           PED_COUNTDOWN: { target: "wait" },
//         },
//       },
//       wait: {
//         on: {
//           PED_COUNTDOWN: { target: "stop" },
//         },
//       },
//       stop: {},
//       blinking: {},
//     },
//   }))
// }
