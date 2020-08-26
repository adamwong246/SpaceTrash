const createStore = require("redux").createStore;
const rootReducer = require("./reducers/indexV2.js");
const initialState = require("./initialState.ts");

module.exports = createStore(rootReducer, initialState);
