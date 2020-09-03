import { fromJS, List } from "immutable";
import combineReducers from "redux";

import initialState from "./initialState.ts";
const updatedDroneRays = require("../getRays.ts");

export default (state = initialState, action) => {
  // console.log(action)
  switch (action.type) {

    case "SET_SESSION_ID": {
      return state.set("sessionId", action.payload)
    }
    case "PICK_DASHBOARD": {
      return state.set("dashBoard", action.payload)
    }
    case "PICK_AUTOPILOT": {
      return state.set("autoPilot", action.payload)
    }
    case "PICK_SHIPYARD": {
      return state.set("shipYard", action.payload)
    }
    case "SET_SHIP_DATA": {
      return state.set("shipMap", action.payload.shipMap.gridMap)
    }
    case "ADD_USER_VIEW": {
      return state.set("userViews", state.get("userViews").concat(action.payload))
    }
    case "ADD_USER_SHIP": {
      return state.set("userShips", state.get("userShips").concat(action.payload))
    }
    case "ADD_USER_AI": {
      return state.set("userAis", state.get("userAis").concat(action.payload))
    }
    case "PACK_ERRORS": {
      return state.set("packErrors", action.payload)
    }
    case "RECEIVE_UPDATE": {
      return state.set("message", action.payload.message)
    }
    case "RECEIVE_UPDATE_FROM_SERVER": {
      // debugger
      const { drones, shipMap } = updatedDroneRays(action.payload)

      return state.set("drones", fromJS(drones)).set("shipMap", fromJS(shipMap))
    }

    case "PICK_FOLDER": {
      return state.set("sourceFolder", action.payload)
    }

    default:
      console.log("IDK", action)
      return state;
  }
  return state;
};
