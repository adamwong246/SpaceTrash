const { fromJS, Map } = require('immutable');
const createSelector = require("reselect").createSelector;
const initSubscriber = require('redux-subscriber').default;

const store = require("./redux/store.ts");

const dequeSpeed = 1000;
const subscriptions = {};

const subscribe = initSubscriber(store);

module.exports = (socketServer, broadcaster) => {

  const runAllSubscriptions = () => {
    Object.keys(subscriptions).forEach((subscriptionKey) => {
      subscriptions[subscriptionKey](store.getState())
    })
  }

  const selectBase = (state) => {
    console.log("SELECT - selectBase")
    return state
  }

  const selectGameStates = createSelector([selectBase], (base) => {
    console.log("SELECT - selectGameStates")
    return base.get('gameStates')
  })

  // a function which calls itself. Every cycle, it dispatches a "clock signal"
  const dequeuer = () => {
    // console.log("tick", Date.now())
    store.dispatch({ type: "TICK", payload: {} })

    const state = store.getState().myReducer;
    runAllSubscriptions()

    setTimeout(dequeuer, dequeSpeed);
  }

  setTimeout(dequeuer, dequeSpeed);

  return {

    store,

    initializeGameStateV2: (session, ship, users, drones, semaphore = "init") => {
      const sessionId = session.id;
      const sessionKey = `session-${sessionId}`

      subscriptions[sessionKey] = createSelector([selectGameStates], (gameStates) => {
        console.log("SELECTOR", sessionKey)

        if (!gameStates) {
          broadcaster(sessionKey, { "message": `// WARNING: Game state does not exist` })
        }

        // fixme
        const gameState = gameStates.toJS()[sessionId]
        if (!gameState) {
          broadcaster(sessionKey, { "message": `// WARNING: Game state for session #${sessionId} does not exist` })
        }

        // const drones = gameState.drones
        // if (!drones) {
        //   broadcaster(sessionKey, { "message": `// WARNING: Drones of session #${sessionId} do no exist` })
        // }
        //
        // broadcaster(sessionKey, { "message": `AOK`, drones })

        return gameStates.get(sessionId)
      })

      store.dispatch({
        type: "INITIALIZE_SESSION", payload: {
          sessionId,
          ship,
          users,
          drones
        }
      })
      runAllSubscriptions()

    },

    enqueuer: (command, droneId, sessionId) => {
      store.dispatch({ type: "ENQUEUE_INSTRUCTION", payload: {command, droneId, sessionId} })
      runAllSubscriptions()
    },

    loader: (session,
      message) => {
      const sessionId = session._id;
      const sessionKey = `session-${sessionId}`
      const userId = message.room.split('-')[3]
      const room = `session-${sessionId}-user-${userId}`

      const sessionSelector = subscriptions[sessionKey]

      if (!sessionSelector) {
        broadcaster(room, { "message": `FUBAR` })
        return
      }

      subscriptions[room] = createSelector([sessionSelector], (session) => {
        console.log("SELECTOR", room)
        const drones = session.get("drones")


        const matchingUsers = session.getIn(["users"]).filter((user) => {
          return user.get("id") == userId
        })

        var shipMap = {}
        if (matchingUsers.size){
          shipMap = matchingUsers.get(0).get("shipmap")
        } else {
          shipMap = new Map({})
        }

        broadcaster(room, { drones, shipMap })
        return drones
      })
      runAllSubscriptions()

    }
  }
}
