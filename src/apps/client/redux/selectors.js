import {
  createSelector
} from "reselect";

import store from "./store.js";

const baseSelector = (state => state)

export const getTabAutoProps = createSelector([baseSelector], base => {
  return {
    terminalLines: base.terminalLines,
    autoPilot: base.autoPilot,
  }
})

export const getTabYardProps = createSelector([baseSelector], base => {
  return {
    ...base,
    shipYard: base.shipYard,
  }
})

export const getTabDashProps = createSelector([baseSelector], base => {
  return {
    ...base,
    dashBoard: base.dashBoard,
  }
})

// export const getTabEditBundlesProps =  createSelector([baseSelector], base => {
//   return {
//    userViews: base.userViews || [],
//    userAis: base.userAis || [],
//    userShips: base.userShips || [],
//
//    setUserView: (userViewBundleName) => {
//      base.userViews.forEach((userView) => {
//        if(userView.name === userViewBundleName){
//          store.dispatch({type: "SET_USER_VIEW", payload: userView.contents})
//        }
//      })
//    },
//
//    // makeShip: (userShipBundleName) => {
//    //   base.userShips.forEach((userShip) => {
//    //     if(userShip.name === userShipBundleName){
//    //       store.dispatch({type: "SET_USER_SHIP", payload: userShip.name})
//    //     }
//    //   })
//    // }
//
//  }
// });


export const getTabBotsProps = createSelector([baseSelector], base => {
  return {
    drones: base.drones,
    dispatcher: (type, payload) => store.dispatch({
      type,
      payload
    })
  }
})

// export const getTabEditProps = createSelector([baseSelector], base => {
//
//   const openFileContents = base.openFile.reduce((memo, address) => {
//     return memo[address]
//   }, base.sourceCode)
//
//
//   return {
//
//     packErrors: base.packErrors,
//
//     sourceFolder: base.sourceFolder,
//
//     openFileContents: openFileContents === {} ? "" : openFileContents,
//
//     sourceCode: base.sourceCode,
//
//     openFile: (filePath) => {
//       store.dispatch({
//         type: 'SET_OPEN_FILE',
//         payload: filePath
//       })
//     },
//   }
// })

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
