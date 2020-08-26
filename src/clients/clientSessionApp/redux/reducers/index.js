import {
  combineReducers
} from "redux";

import initialState from "../initialState.ts";

export default combineReducers({

  openFileContents: (state = initialState, action) => {
    switch (action.type) {

      case "SET_OPEN_FILE": {
        return action.payload

      }
      default:
        return state;
    }
  },

  userFiles: (state = initialState, action) => {
    switch (action.type) {

      case "UPLOAD_FOLDER": {
        return action.payload

      }
      default:
        return state;
    }
  },

  terminalLines: (state = initialState, action) => {
    switch (action.type) {
      case "NEW_COMMAND": {
        return [...state, action.payload]
      }
      default:
        return state;
    }
  },

  userGeneratedView: (state = initialState, action) => {
    switch (action.type) {
      case "SET_INDEX_JSXHTML": {
        return action.payload
      }

      default:
        return state;
    }
  },

  userScripts: (state = initialState, action) => {
    switch (action.type) {
      case "CODE_UPLOAD": {
        try {
            return eval(action.payload)
        } catch (e) {
            console.log(e)
        }
      }

      default:
        return state;
    }
  },

  usr: (state = initialState, action) => {
    switch (action.type) {

      case "OBSERVE_DRONES_RAYS": {
        const returnedTarget = Object.assign({}, state)

        const drones = Object.keys(action.payload).map((droneId) => {
          return action.payload[droneId]
        });

        Object.assign(returnedTarget, {
          drones: drones,
          // ships: action.payload.ship
        })

        drones.forEach((drone) => {

          const droneId = drone._id;
          const shipId = drone.ship

          if (!returnedTarget.droneData) {
            returnedTarget.droneData = {}
          }

          if (!returnedTarget.droneData[droneId]) {
            returnedTarget.droneData[droneId] = {}
          }
          returnedTarget.droneData[droneId].rays = drone.rays

          drone.rays.forEach((ray) => {

            const listOfTiles = (ray.brenshams || [])
            listOfTiles.forEach((tile) => {
              if (!returnedTarget.gridData) {
                returnedTarget.gridData = {}
              }
              if (!returnedTarget.gridData[shipId]) {
                returnedTarget.gridData[shipId] = {}
              }
              if (!returnedTarget.gridData[shipId].tiles) {
                returnedTarget.gridData[shipId].tiles = {}
              }
              if (!returnedTarget.gridData[shipId].tiles[tile.x]) {
                returnedTarget.gridData[shipId].tiles[tile.x] = {}
              }


              if (!returnedTarget.droneData[droneId]) {
                returnedTarget.droneData[droneId] = {}
              }
              if (!returnedTarget.droneData[droneId].tiles) {
                returnedTarget.droneData[droneId].tiles = {}
              }
              if (!returnedTarget.droneData[droneId].tiles[tile.x]) {
                returnedTarget.droneData[droneId].tiles[tile.x] = {}
              }

              returnedTarget.gridData[shipId].tiles[tile.x][tile.y] = tile.tile
              returnedTarget.droneData[droneId].tiles[tile.x][tile.y] = tile.tile


            })

          })

          returnedTarget.droneData[droneId].name = drone.name
          returnedTarget.droneData[droneId].x = drone.x
          returnedTarget.droneData[droneId].y = drone.y
          returnedTarget.droneData[droneId].direction = drone.direction

          // returnedTarget.gridData[shipId].tiles[Math.round(drone.x)][Math.round(drone.y)][1] = `drone-${drone.id}`

        })
        debugger
        return returnedTarget;
      }

      default:
        return state;
    }
  }

});
