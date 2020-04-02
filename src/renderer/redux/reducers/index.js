import { combineReducers } from "redux";

import boardedShip from "./boardedShip";
import camera from "./camera";
import computer from "./computer";
import currentShip from "./currentShip";
import drones from "./drones";
import droneWithActiveVideo from "./droneWithActiveVideo";
import ships from "./ships";
import upgrades from "./upgrades";
import threats from "./threats.js";
import editingShip from "./editingShip.js"
import editingFile from "./editingFile.js"
import schematicCursor from "./schematicCursor.ts"
import scriptEditingFile from "./scriptEditingFile.ts"
import scripts from "./scripts.ts";

import initialState from "../initialState.ts";

import {SHOW_SCRIPTS} from '../actionTypes.js';

export default combineReducers({
  ships, currentShip, drones, upgrades, boardedShip, droneWithActiveVideo, computer, camera, threats,
  editingShip, editingFile, schematicCursor, scriptEditingFile,



});
