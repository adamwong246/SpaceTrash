import * as ActionTypes from "../../redux/actionTypes";
import * as shellCommands from "./index.ts";

export default {
    description: "a list of low-level sytem commands",
    example: "commands",
    args: 0,
    requireLogin: false,
    executor: (dispatch, args, store) => {

      dispatch({ type: ActionTypes.NEW_COMMAND, payload: ActionTypes.USER_TYPES.join('\n') })
  }
}
