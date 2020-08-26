const { fromJS, Map } = require('immutable');
const createSelector = require("reselect").createSelector;
const initSubscriber = require('redux-subscriber').default;

const renderDrone = require("./renderDrone.ts");
const store = require("./redux/store.ts");

const dequeSpeed = 2000;
const subscriptions = {};

const subscribe = initSubscriber(store);

module.exports = (socketServer, broadcaster) => {

  const runAllSubscriptions = () => {
    Object.keys(subscriptions).forEach((subscriptionKey) =>{
      subscriptions[subscriptionKey](store.getState())
    })
  }

  // a function which calls itself. Every cycle, it dispatches a "clock signal"
  const dequeuer = () => {
    console.log("tick", Date.now())
    store.dispatch({ type: "TICK", payload: {} })

    const state = store.getState().myReducer;
    // broadcastPropsTestV0(state);
    // broadcastPropsTestV2(state);
    runAllSubscriptions()

    setTimeout(dequeuer, dequeSpeed);
  }

  setTimeout(dequeuer, dequeSpeed);



  const selectBase = ((state) => {
    console.log("mark0");
    return state
  })

  const selectGameStates = createSelector([selectBase], (base) => {
    console.log("mark1");
    return base.get('gameStates');
  })

  return {

    store,

    initializeGameStateV2: (session, ships, drones, semaphore = "init") => {
      const sessionId = session.id;
      const sessionKey = `session-${sessionId}`

      subscriptions[sessionKey] = createSelector([selectGameStates], (gameStates) => {

        if (!gameStates) {
          broadcaster(sessionKey, { "message": `// WARNING: Game state does not exist` })
        }

        // fixme
        const gameState = gameStates.toJS()[sessionId]
        if (!gameState) {
          broadcaster(sessionKey, { "message": `// WARNING: Game state for session #${sessionId} does not exist` })
        }

        const drones = gameState.drones
        if (!drones) {
          broadcaster(sessionKey, { "message": `// WARNING: Drones of session #${sessionId} do no exist` })
        }

        broadcaster(sessionKey, { "message": `AOK`, drones })

        return gameStates.get(sessionId)
      })

      store.dispatch({
        type: "INITIALIZE_SESSION", payload: {
          sessionId,
          ships,
          drones
        }
      })
      runAllSubscriptions()

    },

    enqueuer: (instruction) => {
      store.dispatch({ type: "ENQUEUE_INSTRUCTION", payload: instruction })
      runAllSubscriptions()
    },

    loader: (session,
      message) => {
      const sessionId = session._id;
      const sessionKey = `session-${sessionId}`
      const userId = message.room.split('-')[3]
      const room = `session-${sessionId}-user-${userId}`

      const sessionSelector = subscriptions[sessionKey]

      if (!sessionSelector){
        broadcaster(room, { "message": `FUBAR` })
        return
      }

      subscriptions[room] = createSelector([sessionSelector], (session) => {
        const drones = session.get("drones")
        broadcaster(room, {drones: drones})
        return drones
      })
      runAllSubscriptions()

    }
  }
}
