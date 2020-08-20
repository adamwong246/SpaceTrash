import { combineReducers } from "redux";

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
          command: action.payload.command,
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

      default:
        return state;
    }
  },


  // commandQueues: function ( state = initialState, action) => {
  //   switch (action.type) {
  //     case 'QUEUE_COMMAND': {
  //       console.log('QUEUE_COMMAND', action.payload)
  //       debugger
  //       return {
  //         ...state,
  //         {
  //
  //         }
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

  loadState: function(state = {}, action) {
    switch (action.type) {
      case 'LOAD_GAME_STATE': {
        console.log('LOAD_GAME_STATE', action.payload)
        return {
          ...state,
          chatLog: action.payload.chatLog,
          ships: action.payload.ships,
          drones: action.payload.drones
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
