import { combineReducers } from "redux";

import computer from "./computer";

export default combineReducers({

  loadState: function(state = {}, action) {
    switch (action.type) {
      case 'LOAD_GAME_STATE': {
        console.log('LOAD_GAME_STATE', action.payload)
        return {
          ...state,
          chatLog: action.payload.chatLog,
          ships: action.payload.ships
        }
      }

      default:
        return state;
    }
  },

  drones : (doneState = {}) => {
    return doneState
  },

  myShip : (state = {}) => {
    return state
  },

  otherShips : (state = {}) => {
    return state
  },

});
