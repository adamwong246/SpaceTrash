import {
  createSelector
} from "reselect";

import store from "./store.js";

const baseSelector = (state => state)

export const getTabIoProps = createSelector([baseSelector], state => {
  return {
    drones: state.usr.drones
  }
})

export const getTabViewProps = createSelector([baseSelector], state => {
  debugger
  return {
    userScripts: state.userScripts,
    drones: state.usr.drones,
    ships: state.usr.ships,
    droneData: state.usr.droneData,
    gridData: state.usr.gridData,

    dispatcher: (instruction, droneId) => store.dispatch({
      type: "QUEUE_COMMAND",
      payload: {
        drone: droneId,
        instruction
      }
    })
  }
})

export const getTabMapProps = createSelector([baseSelector], state => {
  return {
    ships: state.usr.ships
  }
})


export const getTabChatProps = createSelector([baseSelector], state => {
  return {
    chatLog: state.usr.chatLog
  }
})

export const getTabLogProps = createSelector([baseSelector], state => {
  return {
    terminalLines: []
  }
})

export const getTabDataProps = createSelector([baseSelector], (base) => {
  return {
    commandQueues: base.commandQueues,
    drones: base.usr.drones,
    ships: base.usr.ships,
    usr: base.usr,
    userScripts: base.userScripts
  }
});

export const getTimeProps = createSelector([baseSelector], state => {
  return {
    clock: state.clock
  };
})
