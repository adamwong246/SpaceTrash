// const safeEval = require('safe-eval')
const fileDialog = require('file-dialog')

import * as ActionTypes from "../redux/actionTypes";

const actions = Object.keys(ActionTypes);

export default {
  parse: (dispatch, value, store, broadcast) => {
    const split = value.split(' ')

    dispatch({ type: ActionTypes.NEW_COMMAND, payload: `< ${value}` })

    if (split[0] === "help") {
      dispatch({ type: ActionTypes.NEW_COMMAND, payload: `help: a list of system commands` })
      dispatch({ type: ActionTypes.NEW_COMMAND, payload: `- about` })
      dispatch({ type: ActionTypes.NEW_COMMAND, payload: `- login` })
      return
    }

    if (split[0] === "about") {
      dispatch({ type: ActionTypes.NEW_COMMAND, payload: `spaceTrash is a MMO roguelike game about robots fighting on spaceships.` })

      dispatch({ type: ActionTypes.NEW_COMMAND, payload: `` })
      dispatch({ type: ActionTypes.NEW_COMMAND, payload: `spaceTrash combines elements of Duskes, FTL, Cogmind, Factorio and SpaceStation 13` })
      dispatch({ type: ActionTypes.NEW_COMMAND, payload: `` })

      dispatch({ type: ActionTypes.NEW_COMMAND, payload: `After logging into the spaceTrash network and connecting to a ship, you dock with other ships, then send your bots to explore, trade, pillage and destroy.` })
      dispatch({ type: ActionTypes.NEW_COMMAND, payload: `You can upload a javascript bundle to the client terminal, then use your own code to control your bots.` })
      dispatch({ type: ActionTypes.NEW_COMMAND, payload: `You can also include react views to create custom interfaces to your drones.` })

      dispatch({ type: ActionTypes.NEW_COMMAND, payload: `` })

      dispatch({ type: ActionTypes.NEW_COMMAND, payload: `The official spaceTrash server is set to "permadeath" but you can run the server locally to test your code.` })
      return
    }

    if (split[0] === "login") {
      dispatch({ type: ActionTypes.NEW_COMMAND, payload: `"login" is disabled. Please try again later.` })
      return
    }


    dispatch({ type: ActionTypes.NEW_COMMAND, payload: `"${value}" does not compute.` })
    dispatch({ type: ActionTypes.NEW_COMMAND, payload: `Try "help" for a list of commands.` })
    return


  }
}
