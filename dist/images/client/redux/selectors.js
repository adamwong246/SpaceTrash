import {
  createSelector
} from "reselect";

import store from "./store.js";

const baseSelector = (state => state)

export const getTabChatProps = createSelector([baseSelector], state => {
  return {
    chatLog: []
  }
})

export const getTabLogProps = createSelector([baseSelector], state => {

  return {
    terminalLines: state.terminalLines
  }
})

export const getTabBotsProps = createSelector([baseSelector], base => {
  return {
    drones: base.drones,
    dispatcher: (type, payload) => store.dispatch({
      type,
      payload
    })
  }
})

export const getTabEditProps = createSelector([baseSelector], base => {


  return {
    userFiles: base.userFiles,

    openFileContents: base.openFileContents,

    openFile: (file) => {
      store.dispatch({
        type: 'SET_OPEN_FILE',
        payload: file.fileText
      })
    },

    onUploadFolder: (e) => {
      const files = e.target.files;

      const promises = Object.keys(files).map((ndx) => {
        return files[ndx].text().then((fileText) => {
          return {
            name: files[ndx].name,
            fileText
          }
        })
      })

      Promise.all(promises).then((f) => {
        store.dispatch({
          type: 'UPLOAD_FOLDER',
          payload: f
        })
      })

    }
  }
})

export const getTabExecProps = createSelector([baseSelector], base => {
  return {
    ...base,
    onUploadFile: (e) => {
      e.target.files[0].text().then((t) => {

        try {
          const evaluated = eval(t)
          console.log(evaluated)
          store.dispatch(
          {
            type: "LOAD_FILE", payload: new evaluated(
              (commands) => {
                commands.forEach((command) => {
                  store.dispatch({
                    type: "QUEUE_COMMAND",
                    payload: command
                  })
                })
              }
            )
          }
        )
        }catch(e){
          console.log(e)
        }

      })
    },
    dispatcher: (instruction, droneId) => store.dispatch({
      type: "QUEUE_COMMAND",
      payload: {
        drone: droneId,
        instruction
      }
    }),
    userBot: base.userBot
  }
})

export const getTabShipProps = createSelector([baseSelector], base => {
  return {
    base: base
  }
})

export const getTabViewProps = createSelector([baseSelector], base => {
  return {
    base: base
  }
})
