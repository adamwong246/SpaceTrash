import {createSelector} from "reselect";

import store from "./store.js";

const baseSelector = (state => state)

export const getTabIoProps = createSelector([baseSelector], state => {
  return {drones: state.loadState.drones}
})

export const getTabViewProps = createSelector([baseSelector], state => {
  return {
    drones: state.loadState.drones,
    ships: state.loadState.ships,
    userGeneratedView: state.userGeneratedView
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

export const getDronesRegistry = createSelector([baseSelector], (base) => {
  return  {
    commandQueues: base.commandQueues
  }
});

export const getTabFileProps = createSelector([baseSelector], (base) => {
  return  {
    onUpload: (e) =>  {
      console.log("SET_INDEX_JSXHTML", e.target.files[0])
      e.target.files[0].text().then((e) => {
        Window.USER_CONFIG = eval(e);
        // store.dispatch({type: "SET_INDEX_JSXHTML", payload: e})
      })

    }
  }
});

export const getTimeProps = createSelector([baseSelector], state => {
  return {
    clock: state.clock
  };
})
