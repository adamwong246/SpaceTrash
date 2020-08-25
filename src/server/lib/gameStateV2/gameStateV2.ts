const initSubscriber = require('redux-subscriber').default;

const getRays = require("../getRays.js");
const store = require("./redux/store.ts");

const subscriptions = {};

const dequeSpeed = 100;

const subscribe = initSubscriber(store);

module.exports = (socketServer, broadcaster) => {

  // const createSubscription = (statePath, listBroadcastTo, sessionId) => {
  //   console.log("SUBSCRIPTION creating...", statePath, listBroadcastTo)
  //   if (!subscriptions[statePath]) {
  //     console.log("MARK")
  //     subscriptions[statePath] = subscribe(statePath, (state) => {
  //       listBroadcastTo.forEach((broadcastTo) => broadcaster(broadcastTo, state.gameStates[sessionId]))
  //     })
  //   } else {
  //     // console.log("susbsciption alrady existed")
  //   };
  // };

  // a function which calls itself. Every cycle, it dispatches a "clock signal"
  //
  const dequeuer = () => {
    store.dispatch({ type: "TICK", payload: {} })

    const state = store.getState()

    Object.keys(state.gameStates).forEach((sessionId) => {
      broadcaster(`sessionSudo-${sessionId}`, state.gameStates[sessionId])

      broadcaster(`session-${sessionId}-user-5f3b0eca72a5dfd350990fbf`, {drones: state.gameStates[sessionId].drones})

    })


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
