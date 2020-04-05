import * as ActionTypes from "../../redux/actionTypes";

import {send} from "../../client-ipc.js";

export default {
  description: "ping the server to make sure you are online ",
  example: "ping`",
  args: 0,
  requireLogin: true,
  executor: (dispatch, args) => {
    dispatch({ type: ActionTypes.NEW_COMMAND, payload: `Pinging server...` })
    send('ping', {}).then((v) => {
      dispatch({ type: ActionTypes.NEW_COMMAND, payload: `${v}` })
    }).catch((e) => {
      dispatch({ type: ActionTypes.NEW_COMMAND, payload: `Ping failed: ${e}` })
    }).finally(() => {
      // dispatch({ type: ActionTypes.NEW_COMMAND, payload: `Ping finally complete` })
    })
    return
  }
};
