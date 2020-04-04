import * as ActionTypes from "../../redux/actionTypes";
import * as shellCommands from "./index.ts";

export default {
    description: "Show a list of the types of commands",
    example: "help`",
    args: 0,
    executor: (dispatch, args, demoMode, loggedIn) => {

      dispatch({ type: ActionTypes.NEW_COMMAND, payload:`Try one of the following:\n${Object.keys(shellCommands).join('\n')} `})

      if (loggedIn){
        dispatch({ type: ActionTypes.NEW_COMMAND, payload:`
          system-commands
          user-scripts
          `})
      }
// else {
//         dispatch({ type: ActionTypes.NEW_COMMAND, payload:`Try one of the following:
// 'login'
// 'about'
// 'settings'
// `       })
    // }
  }
}
