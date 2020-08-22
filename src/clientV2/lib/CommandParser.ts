// const safeEval = require('safe-eval')
const fileDialog = require('file-dialog')

import * as ActionTypes from "../redux/actionTypes";

const actions = Object.keys(ActionTypes);

export default {
  parse: (dispatch, value, store, broadcast) => {
    const split = value.split(' ')

    dispatch({ type: ActionTypes.NEW_COMMAND, payload: `< ${value}` })

    if (split[0] === "SAY") {
      broadcast({ say: split[1] })
      return
    }

    if (split[0] === "Q") {
      dispatch({
        type: ActionTypes.QUEUE_COMMAND, payload: {
          drone: split[1],
          instruction: split[2]
        }
      })
      return
    }

    if (split[0] === "CODE_UPLOAD") {
      fileDialog()
        .then(file => {
          file[0].text().then((e) => {
            Window.USER_CONFIG = eval(e);
          })
        })
      return
    }

    return dispatch({ type: ActionTypes.NEW_COMMAND, payload: `> Error: ${value}` })


  }
}
