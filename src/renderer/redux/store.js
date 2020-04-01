import { createStore } from "redux";
import rootReducer from "./reducers";

import RayCastMap from "../raycast/RayCastMap.ts"

export default createStore(rootReducer, {
  schematicCursor:{
    x: 0, y: 0, mapCell: {}
  },
  ships: [
    {
      id: 0,
      name: "USCSS Nostromo",
      map: new RayCastMap(16, 16),
      class: "Starfreighter",
      registration: "1809246(09)",
      model: "Lockmart CM-88B Bison",
      make: "Weyland-Yutani",
      year: "2064",
      files: {
        'makeNostromo.ts': "hello world",
        'makeDrone.ts': "hello makeDrone.ts",
        'utils': {
          'foo.js': "hello foo.ts",
          'bar.js': "hello bar.ts",
          'dig.js': "hello dig.ts",
        }
      }
    },
    {
      id: 1,
      name: "USCSS Sulaco",
      map: new RayCastMap(16, 16),
      class: "Military vessel",
      registration: "7839f46(a4)",
      model: "Akira class",
      make: "Amazon",
      year: "2122",
      files: {
        'makeSulaco.ts': "// implement a class that inheirits from ship.ts\nmodule.exports = {}"
      }
    },
    {
      id: 2,
      name: "IPU Merkava",
      map: new RayCastMap(16, 16),
      class: "Mining",
      registration: "v80dqi6(9)",
      model: "Lockmart CM-88B Bison",
      make: "SpaceEx",
      year: "2071",
      files: {
        'makeNostromo.ts': "hello world",
        'makeDrone.ts': "hello makeDrone.ts",
        'utils': {
          'foo.js': "hello foo.ts",
          'bar.js': "hello bar.ts",
          'dig.js': "hello dig.ts",
        }
      }
    },
  ],
  currentShip: 0,
  boardedShip: 1,
  editingShip: 0,
  editingFile: [],
  drones: [
    {
      id: 0, name: "Larry",
      upgrades: [0, 1],
      x: 0, y: 0, direction: 3
    },
    {
      id: 1, name:  "Curly",
      upgrades: [2, 3, 4],
      x: 0, y: 1, direction: 6
    },
    {
      id: 2,name:  "Moe",
      upgrades: [5],
      x: 0, y: 2, direction: 9
    }
  ],
  droneWithActiveVideo: 0,
  commandLine: {
    notification: 'type commands here',
    logs: [
      'booting Space Trash v0...',
      'Adam Wong 2020'
    ],
  },
  camera: {
    x: 0, //left
    y: 1000, // up
    z: -4000, // forward
    dx: -1,
    dy: 0,
    dz: 0,
    d: 90
  }
});
