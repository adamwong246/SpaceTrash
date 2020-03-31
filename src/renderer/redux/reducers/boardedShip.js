import { SET_BOARDED_SHIP } from "../actionTypes";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_BOARDED_SHIP: {
      const { id, content } = action.payload;
      return {
        ...state,
        boardedShip: action.payload
      };
    }

    default:
      return state;
  }
}
