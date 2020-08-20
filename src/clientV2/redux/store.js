import {
  createStore
} from "redux";
import rootReducer from "./reducers";

import initialState from "./initialState.ts";

export default createStore(rootReducer, initialState);
