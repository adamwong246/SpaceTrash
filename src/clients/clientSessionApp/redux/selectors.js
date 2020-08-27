import {
  createSelector
} from "reselect";

import store from "./store.js";

const baseSelector = (state => state)

export const getTabCodeProps = createSelector([baseSelector], base => {


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

export const getTabIoProps = createSelector([baseSelector], state => {
  return {
    drones: state.usr.drones
  }
})

export const getTabViewProps = createSelector([baseSelector], state => {
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
