import * as ActionTypes from "../../redux/actionTypes";

export default {
    description: "Log into the system",
    example: "login [you name]",
    args: 1,
    requireLogin: false,
    executor: (dispatch, args, store) => {
      if (store.demoMode){
        dispatch({ type: ActionTypes.NEW_COMMAND, payload: `* USER ACOUNTS DISABLED. PLEASE TRY AGAIN LATER *` })
        return
      } else {
        if (!args[1]){
          dispatch({ type: ActionTypes.NEW_COMMAND, payload: `Please provide a name. ex: "login hal"` })
          return;
        } else {
          dispatch({ type: ActionTypes.LOGIN, payload: args[1] })
          dispatch({ type: ActionTypes.NEW_COMMAND, payload: `logging in as ${args[1]}` })
          return
        }
      }
    }
  }
