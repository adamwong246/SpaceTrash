import { combineReducers } from "redux";

import boardedShip from "./boardedShip";
import camera from "./camera";
import computer from "./computer";
import currentShip from "./currentShip";
import ships from "./ships";
import upgrades from "./upgrades";
import threats from "./threats.js";
import editingShip from "./editingShip.js"
import editingFile from "./editingFile.js"
import schematicCursor from "./schematicCursor.ts"
import scriptEditingFile from "./scriptEditingFile.ts"
import idealizedWorld from "./idealizedWorld.ts";
import realizedWorld from "./realizedWorld.ts";

export default combineReducers({
  ships, currentShip, upgrades, boardedShip, computer, camera, threats,
  editingShip, editingFile, schematicCursor, scriptEditingFile,
  idealizedWorld, realizedWorld,
  drones : (doneState = {}) => {
    return doneState
  },
  clock: (clockState = {}, action) => {
      switch (action.type) {
        case 'UPDATE_CLOCK': {
          return {
            ...clockState,
            time: Date.now()
          }
        }

        case 'HALT': {
          return {
            ...clockState,
            halted: true,
            lastTime: Date.now()
          }
        }

        case 'RESUME': {
          return {
            ...clockState,
            halted: false,
            lastTime: clockState.lastTime
          }
        }


        default:
          return clockState;
      }
    }
});
