import {
  combineReducers
} from "redux";

import initialState from "../initialState.ts";

const commandQueueWaitTime = 100;

export default combineReducers({

  commandQueues: function(state = {}, action) {
    switch (action.type) {
      case 'QUEUE_COMMAND': {
        console.log('QUEUE_COMMAND', action.payload)

        const commands = state[`${action.payload.drone}`] || []
        const lastTime = commands[commands.length - 1] ? commands[commands.length - 1].timestamp : Date.now()

        const newCommand = {
          instruction: action.payload.instruction,
          timestamp: lastTime + commandQueueWaitTime
        }

        return {
          ...state,
          [`${action.payload.drone}`]: [
            ...state[`${action.payload.drone}`] || [],
            newCommand
          ]
        }
      }

      case 'CLEAR_STALE_QUEUE_COMMANDS': {
        const now = action.payload;

        const freshCommandQueues = {};

        Object.keys(state).forEach((k) => {
          const freshCommands = state[k].filter((c) => c.timestamp > now)

          if(freshCommands.length){
            freshCommandQueues[k] = freshCommands
          }
        })

        return freshCommandQueues
      }

      default:
        return state;
    }
  },

  clock: (clockState = {}, action) => {
    switch (action.type) {
      case 'UPDATE_CLOCK': {
        return {
          ...clockState,
          time: Date.now()
        }
      }

      case 'HALT': {
        return {
          ...clockState,
          halted: true,
          lastTime: Date.now()
        }
      }

      case 'RESUME': {
        return {
          ...clockState,
          halted: false,
          lastTime: clockState.lastTime
        }
      }

      default:
        return clockState;
    }
  },

  loadState: function(state = {}, action) {
    switch (action.type) {
      case 'LOAD_GAME_STATE': {
        console.log('LOAD_GAME_STATE', action.payload)
        return {
          ...state,
          drones: action.payload.dronesWithoutRays,
          ships: action.payload.shipsWithoutFogOfWar
          // chatLog: action.payload.chatLog,
          // ships: action.payload.ships,
          // drones: action.payload.drones
        }
      }

      default:
        return state;
    }
  },

  terminalLines: (state = initialState, action) => {
    switch (action.type) {
      case "NEW_COMMAND": {
        console.log("NEW_COMMAND")
        // debugger
        return [
          ...state,
          action.payload
        ]
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

  usr: (state = initialState, action) => {
    switch (action.type) {

      case "OBSERVE_DRONES_RAYS": {
        const droneData = state.droneData || {};
        const gridData = state.gridData || {};
        const metaData = {
          xMin: Number.POSITIVE_INFINITY,
          yMin: Number.POSITIVE_INFINITY,
          xMax: Number.NEGATIVE_INFINITY,
          yMax: Number.NEGATIVE_INFINITY,
        }

        action.payload.dronesWithoutRays.forEach((drone) => {

          const droneId = drone._id;
          const shipId = drone.ship

          droneData[droneId] = drone.rays

          drone.rays.forEach((ray) => {

            const listOfTiles = (ray.brenshams || [])
            listOfTiles.forEach((tile) => {
              if (!gridData[shipId]){gridData[shipId] = {}}
              if (!gridData[shipId][tile.x]){gridData[shipId][tile.x] = {}}

              gridData[shipId][tile.x][tile.y] = tile.tile

              if (tile.x < metaData.xMin) { metaData.xMin = tile.x}
              if (tile.x > metaData.xMax) { metaData.xMax = tile.x}
              if (tile.y < metaData.yMin) { metaData.yMin = tile.y}
              if (tile.y > metaData.yMax) { metaData.yMax = tile.y}
            })

          })

          gridData[shipId][Math.round(drone.x)][Math.round(drone.y)][1] = `drone-${drone.id}`
        })

        return {...state, gridData, droneData, metaData}
      }

      // case "OBSERVE_RAY": {
      //   const shipId = action.payload.drone.ship
      //
      //   const droneData = {
      //     ...state.droneData,
      //     [action.payload.drone._id] : {
      //       ...(state.droneData || {})[action.payload.drone._id],
      //       rays: {
      //         ...((state.droneData || {})[action.payload.drone._id] || {rays: []}).rays,
      //         [action.payload.ray.id]: action.payload.ray
      //       }
      //     }
      //   }
      //
      //   const gridData = state.gridData || {};
      //   const listOfTiles = (action.payload.ray.brenshams || [])
      //   listOfTiles.forEach((tile) => {
      //
      //     if (!gridData[shipId]){gridData[shipId] = {}}
      //     if (!gridData[shipId][tile.y]){gridData[shipId][tile.y] = {}}
      //     gridData[shipId][tile.y][tile.x] = tile.tile
      //   })
      //
      //   return {
      //     ...state,
      //     "gridData": gridData,
      //     "droneData": droneData,
      //   }
      // }


      default:
        return state;
    }
  }

});
