import { SET_EDITING_FILE } from "../actionTypes";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_EDITING_FILE: {
      const { id, content } = action.payload;
      return action.payload;
    }

    default:
      return state;
  }
}
