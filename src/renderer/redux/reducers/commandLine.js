import { NEW_COMMAND, SET_COMMAND_WARNING } from "../actionTypes";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case NEW_COMMAND: {

      return {
        ...state,
        logs: [
          ...state.logs,
          action.payload
        ]
      }
    }
    case SET_COMMAND_WARNING: {

      return {
        ...state,
        notification: action.payload
      }
    }
    default:
      return state;
  }
}
