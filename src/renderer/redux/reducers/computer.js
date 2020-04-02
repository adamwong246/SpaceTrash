import { NEW_COMMAND, SET_COMMAND_WARNING, SET_COMMAND_LINE_FOCUS, SHOW_SCRIPTS } from "../actionTypes";

const initialState = {};

export default function(computerState = initialState, action) {
  switch (action.type) {
    case NEW_COMMAND: {

      return {
        ...computerState,
        commandLine: {
          ...computerState.commandLine,
          logs: [
            ...computerState.commandLine.logs,
            ...action.payload.split('\n')
          ]
        }

      }
    }
    case SET_COMMAND_WARNING: {

      return {
        ...computerState,
        commandLine: {
          ...computerState.commandLine,
          notification: action.payload
        }

      }
    }

    case SET_COMMAND_LINE_FOCUS: {
      const { id, content } = action.payload;
      return {
        ...computerState,
        commandLine: {
          ...computerState.commandLine,
          focus: Date.now()
        }

      }
    }

    case SHOW_SCRIPTS: {
      return {
        ...computerState,
        commandLine: {
          ...computerState.commandLine,
          logs: [
            ...computerState.commandLine.logs,
            ...Object.keys(computerState.scripts)
          ]

        }
    }}



    default:
      return computerState;
  }
}
