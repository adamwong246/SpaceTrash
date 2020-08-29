import {
  createSelector
} from "reselect";

import store from "./store.js";

const baseSelector = (state => state)

export const getTabDataProps = createSelector([baseSelector], (state) => {
  return state.loadState
});

export const getTabLogProps = createSelector([baseSelector], state => {

  return {
    terminalLines: state.terminalLines
  }
})


export const getTabIoProps = createSelector([baseSelector], state => {
  return {
    drones: state.usr.drones
  }
})

export const getTabViewProps = createSelector([baseSelector], state => {

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




export const getTimeProps = createSelector([baseSelector], state => {
  return {
    clock: state.clock
  };
})
