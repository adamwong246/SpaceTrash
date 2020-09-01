import fs from 'fs';

import {
  createSelector
} from "reselect";

// Map all files in a directory in Node.js recursively and synchronously
var getFiles = function(directory) {
  if(!directory)return []
  let out = [];

  fs.readdirSync(directory).forEach(item => {
    const itemPath = `${directory}/${item}`;

    const pathSplit = item.split('/')
    const justThefile = pathSplit[pathSplit.length - 1];

    if (fs.statSync(itemPath).isDirectory()) {
      if(item !== '.git'){
        out = out.concat({ [justThefile]: getFiles(itemPath) } );
      }
    } else {

      out = out.concat(justThefile)
    }
  });
  return out;

  // if(!directory)return {}
  // let out = {};
  //
  // fs.readdirSync(directory).forEach(item => {
  //   const itemPath = `${directory}/${item}`;
  //
  //   if (fs.statSync(itemPath).isDirectory()) {
  //
  //     if(item !== '.git'){
  //       out[item] = getFiles(itemPath);
  //     }
  //
  //   } else {
  //     out[item] = "fs.readFileSync(itemPath, {encoding: 'utf8',flag: 'r'});"
  //   }
  // });
  // return out;
};

export default (ipcSocket, webSocket) => {

  const baseSelector = ((state) => {
    console.log('baseSelector')
    return state
  });

  const selectAndBroadcastSourceFolder = createSelector([baseSelector], (base) => {
    const sourceFolder = base.get("sourceFolder")
    console.log('selectAndBroadcastSourceFolder')
    ipcSocket.send("update", {sourceFolder})
    return sourceFolder
  })

  const selectAndBroadcastSourceFiles = createSelector([selectAndBroadcastSourceFolder], (sourceFolder) => {
    console.log('selectAndBroadcastSourceFiles', sourceFolder)

    const sourceCode = getFiles(sourceFolder);

    ipcSocket.send("update", {sourceCode: sourceCode})
    return sourceCode
  })

  const selectAndBroadcastEverything = createSelector([baseSelector], (base) => {
    ipcSocket.send("update", base)
    return base
  })

  return {
    baseSelector,
    selectAndBroadcastSourceFolder,
    selectAndBroadcastEverything,
    selectAndBroadcastSourceFiles
  }

}
