import {createSelector} from "reselect";

const baseSelector = (state => state)

export const getTabIoProps = createSelector([baseSelector], state => {

  const mappedDrones = Object.keys(state.loadState.dronesWithRays).map((dKey) => {
    return state.loadState.dronesWithRays[dKey]
  })

  return {drones: mappedDrones}
})

export const getTabMapProps = createSelector([baseSelector], state => {

  // const mappedShips = Object.keys(state.loadState.shipsWithFogOfWar).map((sKey) => {
  //   return state.loadState.shipsWithFogOfWar[sKey]
  // })

  return {
    ships: state.loadState.shipsWithFogOfWar
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
