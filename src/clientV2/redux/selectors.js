import {
  createSelector
} from "reselect";

import store from "./store.js";

const baseSelector = (state => state)

export const getTabIoProps = createSelector([baseSelector], state => {
  return {
    drones: state.loadState.drones
  }
})

export const getTabViewProps = createSelector([baseSelector], state => {

  return {
    drones: state.loadState.drones,
    ships: state.loadState.ships,
    droneData: state.usr.droneData,
    gridData: state.usr.gridData,
    metaData: state.usr.metaData,
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
    ships: state.loadState.ships
  }
})


export const getTabChatProps = createSelector([baseSelector], state => {
  return {
    chatLog: state.loadState.chatLog
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
    drones: base.loadState.drones,
    ships: base.loadState.ships,
    usr: base.usr
  }
});

export const getTimeProps = createSelector([baseSelector], state => {
  return {
    clock: state.clock
  };
})
