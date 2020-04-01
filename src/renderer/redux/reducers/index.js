import { combineReducers } from "redux";

import boardedShip from "./boardedShip";
import camera from "./camera";
import commandLine from "./commandLine";
import currentShip from "./currentShip";
import drones from "./drones";
import droneWithActiveVideo from "./droneWithActiveVideo";
import ships from "./ships";
import upgrades from "./upgrades";
import threats from "./threats.js";
import editingShip from "./editingShip.js"
import editingFile from "./editingFile.js"
import schematicCursor from "./schematicCursor.ts"

export default combineReducers({
  ships, currentShip, drones, upgrades, boardedShip, droneWithActiveVideo, commandLine, camera, threats,
  editingShip, editingFile, schematicCursor
});
