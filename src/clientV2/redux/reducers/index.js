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
          dronesWithRays: action.payload.dronesWithRays,
          shipsWithFogOfWar: action.payload.shipsWithFogOfWar
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
  }

});
