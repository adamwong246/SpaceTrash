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

    if (split[0] === "QQ") {
      for(var i=0; i < parseInt(split[3]); i++){
        dispatch({
          type: ActionTypes.QUEUE_COMMAND, payload: {
            drone: split[1],
            instruction: split[2]
          }
        })
      }
      return
    }

    if (split[0] === "DQ") {
      dispatch({
        type: "DEQUEUE_COMMANDS", payload: {
          drone: split[1]
        }
      })
      return
    }



    if (split[0] === "CODE_UPLOAD") {
      dispatch({ type: ActionTypes.NEW_COMMAND, payload: "I hope you are running trusted code. Caveat Empetor!" })
      fileDialog()
        .then(file => {
          file[0].text().then((e) => {
            // Window.USER_CONFIG = eval(e);
            dispatch({ type: "CODE_UPLOAD", payload: e })
            dispatch({ type: ActionTypes.NEW_COMMAND, payload: "Your profile has been updated" })
          })
        })
      return
    }

    if (split[0] === "CODE_DOWNLOAD") {
      dispatch({ type: ActionTypes.NEW_COMMAND, payload: "I hope you are running trusted code. Caveat Empetor!" })
      fetch('https://raw.githubusercontent.com/adamwong246/SpaceTrash/websockets/dist/adam.bundle.js')
        .then(response => response.text())
        .then(data => {
          dispatch({ type: "CODE_UPLOAD", payload: data })
          dispatch({ type: ActionTypes.NEW_COMMAND, payload: "Your profile has been updated" })
        });
      return
    }


    return dispatch({ type: ActionTypes.NEW_COMMAND, payload: `> Error: ${value}` })


  }
}
