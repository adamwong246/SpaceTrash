import combineReducers from "redux".;

import initialState from "./initialState.ts";

export default (state = initialState, action) => {

  switch (action.type) {

    case "LOAD_FILE": {
      return {
        ...state,
        userBot: action.payload
      }
    }

    case "RECEIVE_UPDATE": {
      console.log(action)
      return {
        ...state,
        ...action.payload
      }
    }

    case "UPLOAD_FOLDER": {
      return {
        ...state, userFiles: action.payload
      }
    }

    case "SET_OPEN_FILE": {
      return {
        ...state,
        openFile: action.payload
      }
    }

    default:
      console.log("IDK".action)
      return state;
  }
  return state;
};
