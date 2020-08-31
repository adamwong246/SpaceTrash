import {
  createStore
} from "redux";
import rootReducer from "./reducers.ts";

import initialState from "./initialState.ts";

export default createStore(rootReducer, initialState);
