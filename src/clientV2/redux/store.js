import {
  createStore
} from "redux";
import rootReducer from "./reducers";

// import initialState from "./initialState.ts";
const initialState = {
  drones: [
    "thelma", "louise"
  ],
  myShip: {
    name: "Starseed"
  },
  otherShips: [
    {
      name: "Black Pearl"
    },
    {
      name: "Beebop"
    }
  ],
  commandLine: {
    chatLogs: []
  }
};

export default createStore(rootReducer, initialState);
