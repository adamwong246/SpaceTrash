import fs from 'fs';

import {
  createSelector
} from "reselect";

// Map all files in a directory in Node.js recursively and synchronously
var getFiles = function(directory) {
  if(!directory)return {}
  let out = {};

  fs.readdirSync(directory).forEach(item => {
    const itemPath = `${directory}/${item}`;

    if (fs.statSync(itemPath).isDirectory()) {

      if(item !== '.git'){
        out[item] = getFiles(itemPath);
      }

    } else {
      out[item] = fs.readFileSync(itemPath, {
        encoding: 'utf8',
        flag: 'r'
      });
    }
  });
  return out;
};

export default (ipcSocket, webSocket) => {
  return ((state) => {

    const stateWithFiles = {
      ...state,
      sourceCode: getFiles(state.sourceFolder)
    }
    ipcSocket.send("update", stateWithFiles)
    return state
  })
}
