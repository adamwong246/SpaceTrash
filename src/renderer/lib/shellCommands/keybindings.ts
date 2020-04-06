import * as ActionTypes from "../../redux/actionTypes";
import * as shellCommands from "./index.ts";

export default {
    description: "get and set your keybindings",
    example: "keybindings`",
    args: 0,
    requireLogin: true,
    executor: (dispatch, args, store) => {

      const keybindings = Object.keys(store.computer.keybindings)
      .map((kb) => `${kb} - ${store.computer.keybindings[kb]}`)
      .join('\n')
      // .map((sc) => {return {name: sc, actionType:shellCommands[sc]}})
      // .filter((sc) => store.loggedIn || sc.actionType.requireLogin)
      // .map((c) => [c.name, c.actionType.description])

      dispatch({type: ActionTypes.NEW_COMMAND, payload: keybindings})

  }
}
