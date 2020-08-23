import initSubscriber from 'redux-subscriber';

export default (store, broadcaster) => {
  const subscribe = initSubscriber(store);

  // Start the clock
  const functionUpdateClock = () => {
    store.dispatch({ type: 'UPDATE_CLOCK', payload: {} })
    setTimeout(functionUpdateClock, 0)
  }
  setTimeout(functionUpdateClock, 0)

  // listen for changes to the clock and send stale instructions to server
  const tock = subscribe('clock.time', state => {

    const commandQueues = state.commandQueues;

    // filter out instructions scehduled for the past
    const recentCommandQueues = {};
    Object.keys(commandQueues).forEach((k) => {
      const recentCommands = commandQueues[k].filter((c) => c.timestamp < state.clock.time)
      if (recentCommands.length) { recentCommandQueues[k] = recentCommands }
    })

    // if there are old instructions, send them to the server and remove from client
    if (Object.keys(recentCommandQueues).length) {
      broadcaster({ commandQueues: recentCommandQueues })
      store.dispatch({ type: 'CLEAR_STALE_QUEUE_COMMANDS', payload: state.clock.time })
    }

  });
}
