import * as ActionTypes from "../../redux/actionTypes";
import * as shellCommands from "./index.ts";

export default {
    description: "a helpful list of top-level commands",
    example: "help`",
    args: 0,
    requireLogin: false,
    executor: (dispatch, args, store) => {

      const availableShellCommands = Object.keys(shellCommands)
      .map((sc) => {return {name: sc, actionType:shellCommands[sc]}})
      .filter((sc) => store.loggedIn || sc.actionType.requireLogin)
      .map((c) => [c.name, c.actionType.description])

      dispatch({ type: ActionTypes.NEW_COMMAND, payload:`Try one of the following`})
      dispatch({type: ActionTypes.NEW_COMMAND, payload: availableShellCommands})

  }
}
