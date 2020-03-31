import { createStore } from "redux";
import rootReducer from "./reducers";

import RayCastMap from "../raycast/RayCastMap"

export default createStore(rootReducer, {
  ships: [
    {
      id: 0,
      name: "USCSS Nostromo",
      map: new RayCastMap(32),
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
      map: new RayCastMap(32),
      class: "Military vessel",
      registration: "7839f46(a4)",
      model: "Akira class",
      make: "Amazon",
      year: "2122",
      files: {
        'makeSulaco.ts': "// implement a class that inheirits from ship.ts\nmodule.exports = {}"
      }
    }
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
      x: 4, y: 5, direction: 6
    },
    {
      id: 2,name:  "Moe",
      upgrades: [5],
      x: 7, y: 8, direction: 9
    }
  ],
  droneWithActiveVideo: 0,
  commands: [
    'Space Trash v0',
    'booting...'
  ],
  camera: {
    x: -10000,
    y: 10000,
    z: -5000,
    dx: 0,
    dy: 0.5,
    dz: -0.5,
    d: 150
  }
});
