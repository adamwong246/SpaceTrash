import { SET_SCHEMA_CURSOR } from "../actionTypes";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_SCHEMA_CURSOR: {
      const { id, content } = action.payload;
      return action.payload;
    }

    default:
      return state;
  }
}
