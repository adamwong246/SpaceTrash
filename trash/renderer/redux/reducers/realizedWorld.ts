
const initialState = {};

export default function(videoState = initialState, action) {
  switch (action.type) {
    case 'SET_REALIZED_WORLD': {
      return action.payload
    }
    default:
      return videoState;
  }
}
