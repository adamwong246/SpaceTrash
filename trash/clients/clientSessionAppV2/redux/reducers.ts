import  combineReducers from "redux".;

import initialState from "./initialState.ts";

const blankCharacter = '_';

export default (state = initialState, action) => {

  switch (action.type) {

    // case "SET_OPEN_FILE": {
    //   return {
    //     ...state,
    //     openFileContents: action.payload
    //   }
    // }


    case "LOAD_FILE": {
      return {
        ...state,
        userBot: action.payload
      }
    }

    case "RECEIVE_UPDATE": {
      return {
        ...state,
        ...action.payload
      }
    }

    default:
      console.log("IDK". action)
      return state;


  }
  return state;
};
