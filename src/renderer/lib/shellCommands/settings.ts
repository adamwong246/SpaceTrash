import * as ActionTypes from "../../redux/actionTypes";

const settingsFailMessage = { type: ActionTypes.NEW_COMMAND, payload: `Please provide a key and value.\n ex:\n settings crt on\n settings crt off\n settings theme [you favorite color]\n`}

export default {
  description: "edit your settings",
  example: "settings",
  args: 0,
  requireLogin: false,
  executor: (dispatch, args) => {
    if (!args[1] || !args[2]){
      dispatch(settingsFailMessage)
      return;
    } else {

      if (args[1] === 'crt'){

        if (args[2] === 'on'){
            dispatch({ type: ActionTypes.CRT, payload: true })
            return
        } else if (args[2] === 'off'){
          dispatch({ type: ActionTypes.CRT, payload: false })
          return
        } else{
          dispatch(settingsFailMessage)
          return
        }

      } else if (args[1] === 'theme'){
        dispatch({ type: ActionTypes.THEME, payload: args[2] })
        return
      } else {
        dispatch(settingsFailMessage)
        return
      }

    }
  }
};
