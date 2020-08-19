import {
  NEW_COMMAND,
  SET_COMMAND_WARNING,
  SET_COMMAND_LINE_FOCUS,
  SHOW_SCRIPTS
} from "../actionTypes";

const initialState = {};

export default function(computerState = initialState, action) {
  switch (action.type) {

    case 'KEY_BINDING_DEACTIVATE': {
      return {
        ...computerState,
        keybinding: {
          ...computerState.keybinding,
          active: false
        }
      }
    }

    case NEW_COMMAND: {
      console.log("NEW_COMMAND")
      return {
        ...computerState,
        commandLine: {
          ...computerState.commandLine,
          logs: [
            ...computerState.commandLine.logs,
            action.payload
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
      const {
        id,
        content
      } = action.payload;
      return {
        ...computerState,
        commandLine: {
          ...computerState.commandLine,
          focus: true
        }
      }
    }

    case 'UNSET_COMMAND_LINE_FOCUS': {
      const {
        id,
        content
      } = action.payload;
      return {
        ...computerState,
        commandLine: {
          ...computerState.commandLine,
          focus: false
        }
      }
    }

    case 'UNSET_COMMAND_TO_SUBMIT': {
        return {
          ...computerState,
          commandLine: {
            ...computerState.commandLine,
            commandToSubmit: false
          }
        }
    }

    case 'KEY_PRESS': {
      const {
        id,
        content
      } = action.payload;
      const char = String.fromCharCode(action.payload)

      if (computerState.commandLine.focus) {


        if (action.payload === 8) { //delete
          return {
            ...computerState,
            commandLine: {
              ...computerState.commandLine,
              input: computerState.commandLine.input.slice(0, -1)
            }
          }
        } else if (action.payload === 13) { // return
          return {
            ...computerState,
            commandLine: {
              ...computerState.commandLine,
              input: '',
              commandToSubmit: computerState.commandLine.input
            }
          }
        } else {
          return {
            ...computerState,
            commandLine: {
              ...computerState.commandLine,
              input: `${computerState.commandLine.input}${char}`.toLowerCase()
            }
          }
        }

      } else {
        return {
          ...computerState,
          keybinding: {
            ...computerState.keybinding,
            code: action.payload,
            active: true
          }
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
      }
    }



    default:
      return computerState;
  }
}
