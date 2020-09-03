import {
  createSelector
} from "reselect";

import store from "./store.js";

const baseSelector = (state => state)

export const getTabBotsProps = createSelector([baseSelector], base => {
  return {
    drones: base.drones,
    dispatcher: (type, payload) => store.dispatch({
      type,
      payload
    })
  }
})

export const getTabRootProps = createSelector([baseSelector], base => {
  return {
    terminalLines: base.terminalLines,
    autoPilot: base.autoPilot,
  }
})

export const getTabAutoProps = createSelector([baseSelector], base => {
  return {
    terminalLines: base.terminalLines,
    autoPilot: base.autoPilot,
  }
})

export const getTabYardProps = createSelector([baseSelector], base => {
  return {
    ...base,
    yardedShip: base.yardedShip,
    launchShip: (x) => {
      let xhr = new XMLHttpRequest();
      let url = "http://localhost:3000/ships";

      // open a connection
      xhr.open("POST", url, true);

      // Set the request header i.e. which type of content you are sending
      xhr.setRequestHeader("Content-Type", "application/json");

      // Create a state change callback
      xhr.onreadystatechange = (result) => {
        console.log(result)
        // if (xhr.readyState === 4 && xhr.status === 200) {
        //
        //   // Print received data from server
        //   result.innerHTML = this.responseText;
        //
        // }
      };

      // Sending data with the request
      base.yardedShip.drones = base.yardedShip.bots
      xhr.send(JSON.stringify(base.yardedShip));
    }
  }
})

export const getTabDashProps = createSelector([baseSelector], base => {
  debugger
  return {
    ...base,
    dashBoard: base.dashBoard,
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
