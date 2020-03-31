import { SET_EDITING_SHIP } from "../actionTypes";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_EDITING_SHIP: {
      const { id, content } = action.payload;
      return action.payload;
    }

    default:
      return state;
  }
}
