import {createSelector} from "reselect";

const baseSelector = (state => state)

export const getTabIoProps = createSelector([baseSelector], state => {
  return {drones: state.drones}
})

export const getTabMapProps = createSelector([baseSelector], state => {
  return {
    ships: state.loadState.ships
    // otherShips: state.otherShips, myShip: state.myShip
  }
})


export const getTabChatProps = createSelector([baseSelector], state => {
  return {
    chatLog: state.loadState.chatLog
  }
})
