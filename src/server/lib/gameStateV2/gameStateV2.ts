const createSelector = require("reselect").createSelector;
const initSubscriber = require('redux-subscriber').default;
const { fromJS } = require('immutable');

const getRays = require("../getRays.js");
const store = require("./redux/store.ts");

const subscriptions = {};

const dequeSpeed = 1000;

const subscribe = initSubscriber(store);

const changed = (name, keys, old, v) => {
  for (var i = 0; i < keys.length; i++) {
    if (v[keys[i]] !== old[keys[i]]) {
      console.log('%c %s: %s has changed from %o to %o', 'color: #c00', name, keys[i], old[keys[i]], v[keys[i]])
      return true
    }
  }

  return false
}

const baseSelector = ((state) => {
  console.log("mark-2");
  return state
})

const getPropsTestV0n1 = createSelector([baseSelector], (base) => {
  console.log("mark-1");
  return base.gameStates || {gameStates: {}}
})

const getPropsTestV0 = createSelector([getPropsTestV0n1], (gameStates) => {
  console.log("mark0");
  return gameStates["5f3f8063e7274e786d5758c6"] || {drones: {}}
})

const getPropsTestV1 = createSelector([getPropsTestV0], (gameState) => {
  console.log("mark1");
  return gameState.drones || {drones: {instructions: []}}
})

const getPropsTestV2 = createSelector([getPropsTestV1], (drones) => {
  console.log("mark2");
  return drones["5f3ee4743634bb5433b68b7d"] || {instructions: []}
})

const getPropsTestV3 = createSelector([getPropsTestV2], (drone) => {
  console.log("mark3");
  return drone.instructions || []
})



module.exports = (socketServer, broadcaster) => {

  const broadcastPropsTestV0 = createSelector([getPropsTestV3], state => {
    // console.log("MARK", state);
    broadcaster(`sessionSudo-5f3f8063e7274e786d5758c6`, state)
    return
  })


  // a function which calls itself. Every cycle, it dispatches a "clock signal"
  const dequeuer = () => {
    store.dispatch({ type: "TICK", payload: {} })

    const state = store.getState()
    broadcastPropsTestV0(state)
    setTimeout(dequeuer, dequeSpeed);
  }

  setTimeout(dequeuer, dequeSpeed);

  return {
    store,
    initializeGameStateV2: (session, ships, drones, semaphore = "init") => {
      const sessionId = session.id;
      const sessionKey = `sessionSudo-${sessionId}`

      store.dispatch({
        type: "INITIALIZE_SESSION", payload: {
          sessionId,
          ships,
          drones
        }
      })

      // // createSubscription(`gameStates`, [`sessionSudo-${sessionId}`], sessionId)
      //
      // createSubscription(`gameStates.${sessionId}`, session.users.map((u)=>`session-${sessionId}-user-${u}`), sessionId)
      //
      // // createSubscription(
      // //   `gameStates.${sessionId}.drones`,
      // //   session.users.map((u)=>`session-${sessionId}-user-${u}`),
      // //   sessionId
      // // )
    },
    enqueuer: (instruction) => {
      store.dispatch({type: "ENQUEUE_INSTRUCTION", payload: instruction})
    }
  }
}
