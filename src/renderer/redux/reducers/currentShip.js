import { SET_CURRENT_SHIP } from "../actionTypes";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_SHIP: {
      const { id, content } = action.payload;
      return {
        ...state,
        currentShip: action.payload
      };
    }

    default:
      return state;
  }
}
