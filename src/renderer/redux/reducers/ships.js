import {
  ADD_SHIP
} from "../actionTypes";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_SHIP: {
      const {
        id,
        content
      } = action.payload;
      return {
        ...state,
        ships: [
          ...state.ships,
          action.payload
        ]
      };
    }
    default:
      return state;
  }
}
