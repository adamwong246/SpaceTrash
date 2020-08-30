import  combineReducers from "redux".;

import initialState from "./initialState.ts";

export default (state = initialState, action) => {

  switch (action.type) {

    case "RECEIVE_UPDATE": {
      console.log("RECEIVE_UPDATE", action.payload)
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
