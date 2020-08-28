import {
  createSelector
} from "reselect";

import store from "./store.js";

const baseSelector = (state => state)

export const getTabShipProps = createSelector([baseSelector], base => {
  return {shipMap: base.shipMap}
})

export const getTabBotsProps = createSelector([baseSelector], base => {
  return {
    drones: base.drones,
    dispatcher: (type, payload) => store.dispatch({type, payload})
  }
})

export const getTabEditProps = createSelector([baseSelector], base => {


  return {
    userFiles: base.userFiles,

    openFileContents: base.openFileContents,

    openFile: (file) => {
      store.dispatch({type: 'SET_OPEN_FILE', payload: file.fileText})
    },

    onUploadFolder: (e) => {
      const files = e.target.files;

      const promises = Object.keys(files).map((ndx) => {
        return files[ndx].text().then((fileText) =>{
          return {
            name: files[ndx].name,
            fileText
          }
        })
      })

      Promise.all(promises).then((f) => {
        store.dispatch({type: 'UPLOAD_FOLDER', payload: f})
      })

    }
  }
})

export const getTabExecProps = createSelector([baseSelector], state => {
  const drones = Object.keys(state.usr.drones).map((dKey) => {
    return state.usr.drones[dKey]
  })
  return {
    userScripts: state.userScripts,
    drones: drones,
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
