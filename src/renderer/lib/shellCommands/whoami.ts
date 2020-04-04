import * as ActionTypes from "../../redux/actionTypes";

export default {
    description: "Print your username",
    example: "whoami",
    args: 0,
    executor: (dispatch, args, demoMode, loggedIn) => {
      if (loggedIn){
        dispatch({ type: ActionTypes.NEW_COMMAND, payload: `Logged in as "${loggedIn}"` })
        return;
      } else {
        dispatch({ type: ActionTypes.NEW_COMMAND, payload: `You are not logged.` })
        return
      }
    }
  }
