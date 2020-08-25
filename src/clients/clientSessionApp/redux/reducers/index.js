import {
  combineReducers
} from "redux";

import initialState from "../initialState.ts";

const commandQueueWaitTime = 1;

export default combineReducers({

  commandQueues: function(state = {}, action) {
    switch (action.type) {
      case 'QUEUE_COMMAND': {

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

      case 'DEQUEUE_COMMANDS': {
        return {
          ...state,
          [`${action.payload.drone}`]: []
        }
      }

      case 'CLEAR_STALE_QUEUE_COMMANDS': {
        const now = action.payload;

        const freshCommandQueues = {};

        Object.keys(state).forEach((k) => {
          const freshCommands = state[k].filter((c) => c.timestamp > now)

          if (freshCommands.length) {
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

  // loadState: function(state = {}, action) {
  //   switch (action.type) {
  //     case 'LOAD_GAME_STATE': {
  //       console.log('LOAD_GAME_STATE', action.payload)
  //       return {
  //         ...state,
  //         drones: action.payload.dronesWithoutRays,
  //         ships: action.payload.shipsWithoutFogOfWar
  //         // chatLog: action.payload.chatLog,
  //         // ships: action.payload.ships,
  //         // drones: action.payload.drones
  //       }
  //     }
  //
  //     default:
  //       return state;
  //   }
  // },

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
        return eval(action.payload)
      }

      default:
        return state;
    }
  },

  usr: (state = initialState, action) => {
    switch (action.type) {

      case "OBSERVE_DRONES_RAYS": {
        const returnedTarget = Object.assign({}, state)

        Object.assign(returnedTarget, {
          drones: action.payload.drones,
          ships: action.payload.ship
        })

        action.payload.drones.forEach((drone) => {

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

          returnedTarget.gridData[shipId].tiles[Math.round(drone.x)][Math.round(drone.y)][1] = `drone-${drone.id}`

        })
        return returnedTarget;
      }

      default:
        return state;
    }
  }

});
