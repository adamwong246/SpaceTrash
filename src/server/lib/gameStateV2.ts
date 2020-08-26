const { fromJS, Map } = require('immutable');
const createSelector = require("reselect").createSelector;
const initSubscriber = require('redux-subscriber').default;

const renderDrone = require("./renderDrone.ts");
const store = require("./redux/store.ts");

const subscriptions = {};

const dequeSpeed = 1000;

const subscribe = initSubscriber(store);

const selectBase = ((state) => {
  return state
})

const selectGameStates = createSelector([selectBase], (base) => {
  return base.get('gameStates');
})

const getPropsTestV0 = createSelector([selectGameStates], (gameStates) => {
  return gameStates.get("5f3f8063e7274e786d5758c6");
})

const getPropsTestV1 = createSelector([getPropsTestV0], (gameState) => {
  if (gameState) { return gameState.get("drones") }
})

const selectDronesOfSession = createSelector([getPropsTestV1], (drones) => {
  if (drones) { return drones.get("5f3ee4743634bb5433b68b7d") }
})

const selectMatrixHardcoded = createSelector([getPropsTestV0], (session) => {
  if (session) { return session.get("ships").get("5f3ee3f32b2e0c5412ee1efe").get("matrix") }
})

module.exports = (socketServer, broadcaster) => {

  // const broadcastPropsTestV0 = createSelector([getPropsTestV0], (state) => {
  //   broadcaster(`sessionSudo-5f3f8063e7274e786d5758c6`, state)
  // })

  const broadcastPropsTestV3 = createSelector(
    [getPropsTestV1, selectMatrixHardcoded],
    (dronesOfSessionKeyed, matrix) => {

      if(!dronesOfSessionKeyed || !matrix){return false}


      const dronesEntrySeqs = dronesOfSessionKeyed.entrySeq();
      const droneReduction = dronesEntrySeqs.reduce((droneEntrySeqMemo, dronesEntrySeq) => {
        const droneId = dronesEntrySeq[0]
        const drone = dronesEntrySeq[1]

        const d = drone.set('rays', renderDrone(drone, matrix.toJS()))
        return droneEntrySeqMemo.set(droneId, d)
      }, dronesOfSessionKeyed)

      return droneReduction
      // return (
      //   Object.keys(dronesOfSessionKeyed).reduce((memo, droneKey) => {
      //     const drone = dronesOfSessionKeyed[droneKey]
      //     console.log(droneKey)
      //     console.log(drone)
      //
      //     return (
      //       {
      //         ...memo,
      //         [droneKey]: {
      //           ...dronesOfSessionKeyed[droneKey],
      //           rays: getRays(drone, matrix.toJS())
      //         }
      //       }
      //     )
      //   })
      // );
    }
  )

  const broadcastPropsTestV2 = createSelector([broadcastPropsTestV3], (raycastedDrones) => {
    broadcaster(`session-5f3f8063e7274e786d5758c6-user-5f3b0eca72a5dfd350990fbf`, raycastedDrones)
  })

  // a function which calls itself. Every cycle, it dispatches a "clock signal"
  const dequeuer = () => {
    console.log("tick", Date.now())
    store.dispatch({ type: "TICK", payload: {} })

    const state = store.getState().myReducer;
    // broadcastPropsTestV0(state);
    broadcastPropsTestV2(state);

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
    },
    enqueuer: (instruction) => {
      store.dispatch({ type: "ENQUEUE_INSTRUCTION", payload: instruction })
    }
  }
}
