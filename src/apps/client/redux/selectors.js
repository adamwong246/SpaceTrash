import {
  createSelector
} from "reselect";
import createAsyncSelector from "async-selector";

import store from "./store.js";

const baseSelector = (state => state)


const getDashboard = () => {
  console.log("getDashboard")

  if(Window.MULTIVIEW)  return new Promise(function(resolve, reject) {
    resolve(true)
  })

  return new Promise(function(resolve, reject) {
    console.log("swapping dashboards.js")
    var script = document.getElementById('multiView');
    // var script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = './dashboard.js';
    script.onload = resolve;
    script.onerror = reject;
    document.head.replaceChild(script, document.getElementById('multiView'));

    // document.head.appendChild(script);


    // var script = document.createElement('script');
    // script.type = 'text/javascript';
    // script.async = true;
    // script.src = './main.dashboard.js';
    // script.onload = resolve;
    // script.onerror = reject;
    // // document.head.replaceChild(script, document.getElementById('multiView'));
    // document.head.appendChild(script);

    resolve(true)
  })
};

const params = {
  sync: () => null,
  async: getDashboard,
  onResolve: () => console.log('resolved'),
  onReject: (error) => console.log('error', error),
  onCancel: (promise) => console.log('canceled', promise)
};

const selectDashboard = createSelector([baseSelector], (base) => {
  // console.log("selectDashboard")
  return base.dashBoard
})

const selectMultivew = createAsyncSelector(params, [selectDashboard]);


export const getTabDashProps = createSelector([baseSelector, selectMultivew], (base, multiView) => {
  return {
    ...base,
    dashBoard: multiView
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
        // console.log(result)
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
