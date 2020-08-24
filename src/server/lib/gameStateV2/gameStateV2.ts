const initSubscriber = require('redux-subscriber').default;

const getRays = require("../getRays.js");
const store = require("./redux/store.ts");

module.exports = (socketServer, broadcaster) => {
  const subscribe = initSubscriber(store);

  return {
    store,
    initializeGameStateV2: (session, ships, drones, semaphore = "init") => {

      store.dispatch({type: "INITIALIZE_SESSION", payload: {
        sessionId: session.id,
        ships,
        drones
      }})

      subscribe('gameState', state => {
        broadcaster(`sessionSudo-${session.id}`,state.gameState)
      });
    }
  }
}
