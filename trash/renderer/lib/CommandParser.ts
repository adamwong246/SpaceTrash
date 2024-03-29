const safeEval = require('safe-eval')

import * as ActionTypes from "../redux/actionTypes";
import * as shellCommands from "./shellCommands/index.ts";

const actions = Object.keys(ActionTypes);

export default {
  parse: (dispatch, value, store) => {
    const split = value.split(' ')
    console.log("parse")

    dispatch({ type: ActionTypes.NEW_COMMAND, payload: `< ${value}` })

    if (Object.keys(shellCommands).includes(split[0])){
      shellCommands[split[0]].executor(dispatch, split, store)
      return
    }

    if(Object.keys(store.computer.scripts).includes(split[0])){
      const scriptName = split[0];
      const scriptContents = store.computer.scripts[scriptName]


      try {
        const context = {
          exec: (action, payload) => {
            dispatch({ type: ActionTypes.DRONE_QUEUE, payload: {futureAction: action, payload: payload.id} })
          },
          log: (x) => dispatch({ type: ActionTypes.NEW_COMMAND, payload: x })

        }
        var evaluated = safeEval(scriptContents, context)
        const ran = evaluated(split, store)
        dispatch({ type: ActionTypes.NEW_COMMAND, payload: `> ${ran}`})
        dispatch({ type: ActionTypes.SET_COMMAND_WARNING, payload:  ran })
        return
      }
      catch(err) {
        dispatch({ type: ActionTypes.NEW_COMMAND, payload: `! ${err.message}` })
        dispatch({ type: ActionTypes.SET_COMMAND_WARNING, payload:  `! ${err.message}` })
        return ;
      }

    }


    if (actions.includes(split[0])) {
      const foundCommand = split[0]



      if (split[0] === ActionTypes.SET_VIDEO) {
        dispatch({ type: ActionTypes.SET_VIDEO, payload: parseInt(split[1]) })
      } else if (split[0] === ActionTypes.TELEPORT) {

        dispatch(
          {
            type: ActionTypes.TELEPORT,
            payload: (
              {
                key: split[1],
                value: parseInt(split[2]),
              }
            )
          }
        )

      } else if ([
       ActionTypes.DRONE_MOVE_FORWARD_QUEUE, ActionTypes.DRONE_MOVE_BACK_QUEUE, ActionTypes.DRONE_ROTATE_RIGHT_QUEUE, ActionTypes.DRONE_ROTATE_LEFT_QUEUE
      ].includes(split[0])){

        dispatch(
          {
            type: split[0],
            payload:
              {
                id: parseInt(split[1]),
                step: parseFloat(split[2]),
              }
          }
        );

        dispatch({ type: ActionTypes.SET_COMMAND_WARNING, payload: `drone on autopilot` })
        dispatch({ type: ActionTypes.NEW_COMMAND, payload: `drone on autopilot` })



      }

      else if ([
        ActionTypes.DRONE_MOVE_FORWARD, ActionTypes.DRONE_MOVE_BACK, ActionTypes.DRONE_ROTATE_RIGHT, ActionTypes.DRONE_ROTATE_LEFT
      ].includes(split[0])) {
        dispatch(
          {
            type: split[0],
            payload: (
              {
                id: parseInt(split[1])
              }
            )
          }
        )
        dispatch({ type: ActionTypes.SET_COMMAND_WARNING, payload: `Drone moved` })
        dispatch({ type: ActionTypes.NEW_COMMAND, payload: `Drone moved` })
      }
  } else {
    dispatch({ type: ActionTypes.NEW_COMMAND, payload: `command "${value}" not found. Try "help"`})
    dispatch({ type: ActionTypes.SET_COMMAND_WARNING, payload: `failed to parse: "${value}"` })
  }


  }
}
