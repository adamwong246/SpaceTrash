import { fromJS, List } from "immutable";
import combineReducers from "redux";

import initialState from "./initialState.ts";
const updatedDroneRays = require("../getRays.ts");

export default (state = initialState, action) => {

  switch (action.type) {

    case "PACK_ERRORS": {
      return {
        ...state,
        packErrors: action.payload
      }
    }

    case "RECEIVE_UPDATE": {
      return {
        ...state,
        ...action.payload
      }
    }

    case "RECEIVE_UPDATE_FROM_SERVER": {
      const { drones, shipMap } = updatedDroneRays(action.payload)
      return {
        ...state,
        drones,
        shipMap
      }
    }

    case "PICK_FOLDER": {
      return {
        ...state,
        sourceFolder: action.payload
      }
    }

    default:
      console.log("IDK", action)
      return state;
  }
  return state;
};
