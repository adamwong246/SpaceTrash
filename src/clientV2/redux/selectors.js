import {createSelector} from "reselect";

const baseSelector = (state => state)

export const getTabIoProps = createSelector([baseSelector], state => {
  return {drones: state.loadState.drones}
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

export const getDronesRegistry = createSelector([baseSelector], (base) => {
  return  {
    commandQueues: base.commandQueues
  }
});

export const getTimeProps = createSelector([baseSelector], state => {
  return {
    clock: state.clock
  };
})
