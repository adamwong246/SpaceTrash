
const initialState = {};

export default function(videoState = initialState, action) {
  switch (action.type) {
    case 'SET_MATERIALIZED_WORLD': {

      return action.payload
    }
    default:
      return videoState;
  }
}
