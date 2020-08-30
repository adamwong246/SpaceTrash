import {fromJS, List} from "immutable";
import combineReducers from "redux";

import initialState from "./initialState.ts";
const updatedDroneRays = require("../getRays.ts");

export default (state = initialState, action) => {

  switch (action.type) {

    case "RECEIVE_UPDATE": {
      console.log("RECEIVE_UPDATE", action.payload)
      return {
        ...state,
        ...action.payload
      }
    }

    case "RECEIVE_UPDATE_FROM_SERVER": {
      console.log("RECEIVE_UPDATE_FROM_SERVER", action.payload)

      const matrix = fromJS(action.payload.ship.matrix)

      const drones = fromJS(action.payload.drones).map((drone) => {
        return drone.set('rays', updatedDroneRays(drone, matrix))
      })

      const shipmap = drones
        .reduce((memo, drone) => {
          if (drone.get("rays")) {
            return memo.concat(drone.get("rays"))
          } else {
            return memo
          }
        }, new List([]))
        .map((ray) => {
          return ray.get("brenshams")
        })
        .flatten(1)
        .reduce((memo, brensham) => {
          return {
            ...memo,
            [brensham.get("x")]: {
              ...memo[brensham.get("x")],
              [brensham.get("y")]: brensham.get("tile")
            }
          }
        }, {})


      return {
        ...state,
        drones,
        shipmap
      }
    }

    default:
      console.log("IDK", action)
      return state;


  }
  return state;
};
