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
