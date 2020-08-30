import {fromJS, List} from "immutable";
import combineReducers from "redux";

import initialState from "./initialState.ts";
const updatedDroneRays = require("../getRaysV2.ts");

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
      // const drones = fromJS(payloadReponse.drones).map((drone) => {
      //   return drone.set('rays', getRays(drone, matrix))
      // })
      // const shipMap = drones
      //   .reduce((memo, drone) => {
      //     if (drone.get("rays")) {
      //       return memo.concat(drone.get("rays"))
      //     } else {
      //       return memo
      //     }
      //   }, new List([]))
      //   .map((ray) => {
      //     return ray.get("brenshams")
      //   })
      //   .flatten(1)
      //   .reduce((memo, brensham) => {
      //     return {
      //       ...memo,
      //       [brensham.get("x")]: {
      //         ...memo[brensham.get("x")],
      //         [brensham.get("y")]: brensham.get("tile")
      //       }
      //     }
      //   }, {})
      //

      const {drones, shipMap} = updatedDroneRays(action.payload)

      console.log(drones, shipMap)

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
