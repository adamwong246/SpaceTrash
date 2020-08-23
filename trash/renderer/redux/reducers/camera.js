import { TELEPORT } from "../actionTypes";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {

    case TELEPORT: {
      return {
        ...state,
        [action.payload.key]: action.payload.value
      }
    }

    default:
      return state;
  }
}
