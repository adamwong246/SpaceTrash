import { NEW_COMMAND } from "../actionTypes";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case NEW_COMMAND: {
      return [...state, action.payload];
    }

    default:
      return state;
  }
}
