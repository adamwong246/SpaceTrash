const createStore = require("redux").createStore;
const rootReducer = require("./reducers");
const initialState = require("./initialState.ts");

module.exports = createStore(rootReducer, initialState);
