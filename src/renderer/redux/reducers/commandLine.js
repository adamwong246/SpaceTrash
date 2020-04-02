import { NEW_COMMAND, SET_COMMAND_WARNING, SET_COMMAND_LINE_FOCUS } from "../actionTypes";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case NEW_COMMAND: {

      return {
        ...state,
        logs: [
          ...state.logs,
          ...action.payload.split('\n')
        ]
      }
    }
    case SET_COMMAND_WARNING: {

      return {
        ...state,
        notification: action.payload
      }
    }

    case SET_COMMAND_LINE_FOCUS: {
      const { id, content } = action.payload;
      return {
        ...state,
        focus: Date.now()
      }
    }

    default:
      return state;
  }
}
