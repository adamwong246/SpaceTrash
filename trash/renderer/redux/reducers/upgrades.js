import {
  ADD_UPGRADE
} from "../actionTypes";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_UPGRADE: {
      const {
        id,
        content
      } = action.payload;
      return {
        ...state,
        upgrades: [
          ...state.upgrades,
          action.payload
        ]
      };
    }
    default:
      return state;
  }
}
