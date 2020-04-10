import * as ActionTypes from "../../redux/actionTypes";
import * as shellCommands from "./index.ts";

import rooms from "../../data/rooms.js";
import signals from "../../data/signals.js";
import threats from "../../data/threats.js";
import upgrades from "../../data/upgrades.js";

const subjects = ['rooms', 'signals','upgrades', 'threats'];

export default {
    description: "the user's manual",
    example:[
['manual', 'introduction to the manual'],
['manaual [subject]', 'read entry on a subject'],
],
    args: 0,
    requireLogin: false,
    executor: (dispatch, args, store) => {

      const manualEntries = subjects.map((s) => `'manual ${s}'`).join('\n')

      if(args.length == 1){

        dispatch({ type: ActionTypes.NEW_COMMAND, payload:`Try one of the following`})
        dispatch({type: ActionTypes.NEW_COMMAND, payload:  manualEntries })

      }else {
        // dispatch({ type: ActionTypes.NEW_COMMAND, payload:`Try one of the following`})
        // dispatch({type: ActionTypes.NEW_COMMAND, payload:  manualEntries
        //         .map((sc) => {return {name: sc, actionType:shellCommands[sc]}})
        //       })
      }
  }
}
