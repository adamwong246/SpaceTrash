import {createSelector} from "reselect";

import threats from '../data/threats.js';
import upgrades from '../data/upgrades.js';
import rooms from '../data/rooms.js';
import signals from '../data/signals.js';

import {castSingleRay} from "../lib/raycast/castSingleRay.ts";
import {getRays} from "../lib/raycast/getRays.ts";
import {getMaterializedMap} from "../lib/raycast/getMaterializedMap.ts";

export const getCurrentShip = store => {
  return {ship: store.ships.find((s) => s.id === store.currentShip)}
}

export const getShips = store => {
  return {
    ships: Object.keys(store.ships).map((s) => store.ships[s])
  }
}

export const getDrones = store => {
  const drones = Object.keys(store.drones).map((s) => store.drones[s])
  const upgrades = Object.keys(store.upgrades).map((s) => store.upgrades[s])
  return {
    drones: drones.map((d) => {
      return {
        ...d,
        upgrades: upgrades.filter((u) => d.upgrades.includes(u.id))
      }
    })
  }
}

export const getUpgrades = store => {
  return {
    upgrades: Object.keys(store.upgrades).map((s) => store.upgrades[s])
  }
}

export const getShipInformationProps = store => {
  return {
    ship: store.ships.find((s) => s.id === store.boardedShip)
  }
}

export const getTerminalProps = store => store.computer.commandLine;

export const getCommandLineProps = store => {
  return{
    commandLine: store.computer.commandLine,
    scripts: store.computer.scripts,
    loggedIn: store.computer.loggedIn
  }
};


export const getManual = store => {
  return {
    threats,
    upgrades,
    rooms,
    signals
  }
}

export const getAdminProps = store => {
  const editingShip = store.ships.find((s) => s.id === store.editingShip)

  return {
    ships: store.ships,
    scripts: store.scripts,
    editingShip
  }
}

export const getAdminEditorProps = store => {

  const ship = store.ships.find((s) => s.id === store.editingShip)
  const fileContents = store.editingFile.length ? store.editingFile.reduce((mm, e) => mm[e], ship.files) : ""

  return {
    files: ship.files,
    editingFile: store.editingFile,
    editingShip: store.editingShip,
    fileContents,
    ship
  }
}

export const getScriptEditorProps = store => {

  // const script = store.scripts.find((s) => s.id === store.scriptEditingFile)
  // const fileContents = store.scriptEditingFile.length ? store.scriptEditingFile.reduce((mm, e) => mm[e], store.computer.scripts) : ""
  const scripts = store.computer.scripts
  const file = store.scriptEditingFile[0]
  const fileContents = scripts[file]
  return {
    scripts: store.computer.scripts,
    editingFile: store.scriptEditingFile,
    fileContents,
  }
}

const getShipsSelector = (state) => state.ships
const getCurrentShipIdSelector = (state) => state.currentShip
const getBoardedShipIdSelector = (state) => state.boardedShip

const getCurrentShipSelector = createSelector(
  [getShipsSelector, getCurrentShipIdSelector],
  (ships, current) => {
    return ships.find((s) => s.id === current)
  }
);

const getBoardedShipSelector = createSelector(
  [getShipsSelector, getBoardedShipIdSelector],
  (ships, boarded) => {
    return ships.find((s) => s.id === boarded)
  }
);

const getDronesSelector = (state) => state.drones;
const getVideDroneIdSelector = (state) => state.droneWithActiveVideo;

const getDronesAsListSelector = createSelector([getDronesSelector], (droneObject) => {
  return Object.keys(droneObject).map((s) => droneObject[s])
})

const getVideoDrone = createSelector([getDronesAsListSelector, getVideDroneIdSelector], (drones, activeVideoId) => {
  return drones.find((d) => d.id === activeVideoId)
})

const getMaterializedMapSelector = createSelector([getDronesAsListSelector], (drones) => {
  return getMaterializedMap(drones);
});

const getRaysSelector = createSelector([
  getMaterializedMapSelector,
  getVideoDrone
], (materializedMap, videoDrone) => {
  return getRays(materializedMap, videoDrone)
});

export const getMissionProps = createSelector([
  getCurrentShipSelector,
  getBoardedShipSelector,
  getDronesAsListSelector,
  getMaterializedMapSelector,
  getRaysSelector
], (
  currentShip, boardedShip, drones, materializedMap, rays
) => {
  return {currentShip, boardedShip, drones, materializedMap, rays};
});

export const getVideoProps = store => {

  return {
    drone: store.drones.find((d) => d.id === store.droneWithActiveVideo),
    camera: store.camera
  }
}

export const getSchematicProps = store => {
  return {
    schematicCursor: store.schematicCursor
  }
}

export const getAppProps = store => {
  return {
    loggedIn: store.computer.loggedIn,
    crtEffect: store.computer.crtEffect,
    time: store.clock.time
  }
}

export const getTime = store => {
  return store.time
}
