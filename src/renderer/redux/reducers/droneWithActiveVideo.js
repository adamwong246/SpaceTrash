import { SET_VIDEO } from "../actionTypes";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_VIDEO: {
      const { id, content } = action.payload;
      return action.payload;
    }

    default:
      return state;
  }
}
