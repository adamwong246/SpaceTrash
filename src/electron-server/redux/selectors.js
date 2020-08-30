import {
  createSelector
} from "reselect";

export default (ipcSocket, webSocket) =>{
  return ((state) => {
    ipcSocket.send("update", state)
    return state
  })
}
