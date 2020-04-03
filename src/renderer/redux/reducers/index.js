import { combineReducers } from "redux";

import boardedShip from "./boardedShip";
import camera from "./camera";
import computer from "./computer";
import currentShip from "./currentShip";
import world from "./world.js";
import droneWithActiveVideo from "./droneWithActiveVideo";
import ships from "./ships";
import upgrades from "./upgrades";
import threats from "./threats.js";
import editingShip from "./editingShip.js"
import editingFile from "./editingFile.js"
import schematicCursor from "./schematicCursor.ts"
import scriptEditingFile from "./scriptEditingFile.ts"
import scripts from "./scripts.ts";
import materializedWorld from "./materializedWorld.ts";

import initialState from "../initialState.ts";

import {SHOW_SCRIPTS} from '../actionTypes.js';

export default combineReducers({
  ships, currentShip, world, upgrades, boardedShip, droneWithActiveVideo, computer, camera, threats,
  editingShip, editingFile, schematicCursor, scriptEditingFile, materializedWorld,
    clock: (clockState = initialState, action) => {
      switch (action.type) {
        case 'UPDATE_CLOCK': {
          return {
            time: Date.now(),
            lastTime: clockState.time
          }
        }

        case 'HALT': {
          return {
            ...clockState,
            halted: true
          }
        }

        case 'RESUME': {
          return {
            ...clockState,
            halted: false
          }
        }


        default:
          return clockState;
      }
    }




});
