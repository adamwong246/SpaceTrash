import * as ActionTypes from "../../redux/actionTypes";

export default {
    description: "Log out of the system",
    example: "logout",
    args: 0,
    executor: (dispatch, args, demoMode, loggedIn) => {
      if (loggedIn){
        dispatch({ type: ActionTypes.LOGIN, payload: false })
        dispatch({ type: ActionTypes.NEW_COMMAND, payload: `You are now logged out` })
        return;
      } else {
        dispatch({ type: ActionTypes.NEW_COMMAND, payload: `You are not logged in` })
        return
      }
    }
  }
