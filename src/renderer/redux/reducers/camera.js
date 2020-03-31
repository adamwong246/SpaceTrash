import { TELEPORT } from "../actionTypes";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {

    case TELEPORT: {
      return action.payload
    }

    default:
      return state;
  }
}
