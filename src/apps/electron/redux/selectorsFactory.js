import fs from 'fs';

import {
  createSelector
} from "reselect";

export default (ipcSocket, webSocket) => {

  const baseSelector = ((state) => {
    console.log('baseSelector')
    return state
  });

  const selectAndBroadcastEverything = createSelector([baseSelector], (base) => {
    console.log('selectAndBroadcastEverything', base)

    const fileContents = base.getIn(["shipYard", "fileContents"]);

    const yardedShip = fileContents ? eval(fileContents) : new Map()
    console.log(yardedShip)
    ipcSocket.send("update", base.set("yardedShip", yardedShip ) )

    return base
  })

  // const selectAndBroadcastDashboard = createSelector([baseSelector], (base) => {
  //   const dashBoard = base.get("dashBoard")
  //   console.log('dashBoard')
  //   ipcSocket.send("update", {dashBoard})
  //   return dashBoard
  // })
  //
  // const selectAndBroadcastAutopilot = createSelector([baseSelector], (base) => {
  //   const autoPilot = base.get("autoPilot")
  //   console.log('autoPilot')
  //   ipcSocket.send("update", {autoPilot})
  //   return autoPilot
  // })
  //
  // const selectAndBroadcastShipyard = createSelector([baseSelector], (base) => {
  //   const shipYard = base.get("shipYard")
  //   console.log('shipYard')
  //
  //   const evaled = eval(shipYard.fileContents)
  //   ipcSocket.send("update", {shipYard: shipYard.name, shipMap: evaled.shipMap.gridMap})
  //   return shipYard
  // })

  // const selectAndBroadcastSourceFolder = createSelector([baseSelector], (base) => {
  //   const sourceFolder = base.get("sourceFolder")
  //   console.log('selectAndBroadcastSourceFolder')
  //   ipcSocket.send("update", {sourceFolder})
  //   return sourceFolder
  // })
  //
  // const selectAndBroadcastSourceFiles = createSelector([selectAndBroadcastSourceFolder], (sourceFolder) => {
  //   console.log('selectAndBroadcastSourceFiles', sourceFolder)
  //
  //   const sourceCode = getFiles(sourceFolder);
  //
  //   ipcSocket.send("update", {sourceCode: sourceCode})
  //   return sourceCode
  // })
  //
  // const selectAndBroadcastUserViews = createSelector([baseSelector], (base) => {
  //   const userViews = base.get("userViews")
  //   ipcSocket.send("update", {userViews: base.userViews})
  //   return userViews
  // })
  //
  // const selectAndBroadcastUserAis = createSelector([baseSelector], (base) => {
  //   const userAis = base.get("userAis")
  //   ipcSocket.send("update", {userAis: base.userAis})
  //   return userAis
  // })
  //
  // const selectAndBroadcastUserShips = createSelector([baseSelector], (base) => {
  //   const userShips = base.get("userShips")
  //   ipcSocket.send("update", {userShips: base.userShips})
  //   return userShips
  // })



  // const selectAndBroadcastShipData = createSelector([baseSelector], (base) => {
  //   ipcSocket.send("update", base)
  //   return base
  // })

  return {
    baseSelector,
    selectAndBroadcastEverything,

    // selectAndBroadcastDashboard,
    // selectAndBroadcastAutopilot,
    // selectAndBroadcastShipyard

    // selectAndBroadcastSourceFolder,
    // selectAndBroadcastSourceFiles,
    // selectAndBroadcastUserViews,
    // selectAndBroadcastUserAis,
    // selectAndBroadcastUserShips
  }

}

// // Map all files in a directory in Node.js recursively and synchronously
// var getFiles = function(directory) {
//   if(!directory)return []
//   let out = [];
//
//   fs.readdirSync(directory).forEach(item => {
//     const itemPath = `${directory}/${item}`;
//
//     const pathSplit = item.split('/')
//     const justThefile = pathSplit[pathSplit.length - 1];
//
//     if (fs.statSync(itemPath).isDirectory()) {
//       if(item !== '.git'){
//         out = out.concat({ [justThefile]: getFiles(itemPath) } );
//       }
//     } else {
//
//       out = out.concat(justThefile)
//     }
//   });
//   return out;
//
//   // if(!directory)return {}
//   // let out = {};
//   //
//   // fs.readdirSync(directory).forEach(item => {
//   //   const itemPath = `${directory}/${item}`;
//   //
//   //   if (fs.statSync(itemPath).isDirectory()) {
//   //
//   //     if(item !== '.git'){
//   //       out[item] = getFiles(itemPath);
//   //     }
//   //
//   //   } else {
//   //     out[item] = "fs.readFileSync(itemPath, {encoding: 'utf8',flag: 'r'});"
//   //   }
//   // });
//   // return out;
// };
