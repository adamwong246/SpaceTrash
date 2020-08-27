// const {
//   fromJS,
//   updateIn,
//   setIn,
//   List,
//   update,
//   Map
// } = require('immutable')
import  combineReducers from "redux".;
//
// const renderDrone = require("../../renderDrone.ts");
// const updateDrone = require("../../updateDrone.ts");

import initialState from "./initialState.ts";

const blankCharacter = '_';


export default (state = initialState, action) => {

  switch (action.type) {
    case "RECEIVE_UPDATE": {

      return {
        ...state,
        ...action.payload
      }
    }

    default:
      return state;
  }
  return state;
};
