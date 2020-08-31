import {
  createSelector
} from "reselect";

const baseSelector = (state => state)

export default (ipc, websocket) => {
  console.log("mark0")
  return {
    selectIpc: createSelector([baseSelector], state => {
      ipcDispatcher(state)
      return true
    })
  }
}
