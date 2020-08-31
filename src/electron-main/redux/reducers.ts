import {fromJS, List} from "immutable";
import combineReducers from "redux";

import initialState from "./initialState.ts";
const updatedDroneRays = require("../getRays.ts");

export default (state = initialState, action) => {

  switch (action.type) {

    case "RECEIVE_UPDATE": {
      // console.log("RECEIVE_UPDATE", action.payload)
      return {
        ...state,
        ...action.payload
      }
    }

    case "RECEIVE_UPDATE_FROM_SERVER": {
      // console.log("RECEIVE_UPDATE_FROM_SERVER", action.payload)
      const {drones, shipMap} = updatedDroneRays(action.payload)
      return {
        ...state,
        drones,
        shipMap
      }
    }

    default:
      console.log("IDK", action)
      return state;
  }
  return state;
};
