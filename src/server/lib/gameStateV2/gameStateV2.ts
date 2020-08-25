const initSubscriber = require('redux-subscriber').default;

const getRays = require("../getRays.js");
const store = require("./redux/store.ts");

const subscriptions = {};

const subscribe = initSubscriber(store);

module.exports = (socketServer, broadcaster) => {

  const createSubscription = (statePath, listBroadcastTo, sessionId) => {
    console.log("SUBSCRIPTION creating...", statePath, listBroadcastTo)
    if (!subscriptions[statePath]) {

      subscriptions[statePath] = subscribe(statePath, (state) => {

        listBroadcastTo.forEach((broadcastTo) => broadcaster(broadcastTo, state.gameStates[sessionId]))
      })
    } else {
      // console.log("susbsciption alrady existed")
    };
  };



  // // a function which calls itself. Evey cycle, it dispatches a "clock signal"
  // const dequeuer = () => {
  //   store.dispatch({ type: "TICK", payload: {} })
  //   setTimeout(dequeuer);
  // }
  // setTimeout(dequeuer);



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

      createSubscription(`gameStates`, [`sessionSudo-${sessionId}`], sessionId)

      createSubscription(
        `gameStates.${sessionId}.drones`,
        session.users.map((u)=>`session-${sessionId}-user-${u}`),
        sessionId
      )
    }
  }
}
