import * as ActionTypes from "../../redux/actionTypes";
import * as shellCommands from "./index.ts";

export default {
    description: "a helpful list of top-level commands",
    example: "help",
    args: 0,
    requireLogin: false,
    executor: (dispatch, args, store) => {

      const availableShellCommands = Object.keys(shellCommands)

      if(args.length == 1){


        dispatch({ type: ActionTypes.NEW_COMMAND, payload:`Try one of the following`})
        dispatch({type: ActionTypes.NEW_COMMAND, payload:         availableShellCommands
                .map((sc) => {return {name: sc, actionType:shellCommands[sc]}})
                .filter((sc) => store.loggedIn || sc.actionType.requireLogin)
                .map((c) => [c.name, c.actionType.description])})
        dispatch({ type: ActionTypes.NEW_COMMAND, payload:`For help with a specific commands, try "help [your-command]"`})
      }else {
        if (availableShellCommands.includes(args[1])){
          const script = shellCommands[args[1]]
          dispatch({ type: ActionTypes.NEW_COMMAND, payload: script.description})
          dispatch({ type: ActionTypes.NEW_COMMAND, payload: script.example})
        }
      }
  }
}
