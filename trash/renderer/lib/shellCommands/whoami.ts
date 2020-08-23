import * as ActionTypes from "../../redux/actionTypes";

export default {
    description: "Print your username",
    example: "whoami",
    args: 0,
    requireLogin: true,
    executor: (dispatch, args, store) => {
      if (store.loggedIn){
        dispatch({ type: ActionTypes.NEW_COMMAND, payload: `Logged in as "${store.loggedIn}"` })
        return;
      } else {
        dispatch({ type: ActionTypes.NEW_COMMAND, payload: `You are not logged.` })
        return
      }
    }
  }
