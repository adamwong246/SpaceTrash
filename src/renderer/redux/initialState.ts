import RayCastMap from "../../lib/raycast/RayCastMap.ts";
import initialScripts from "./initialScripts.ts";
import ship from "../../lib/ship0.ts";

const drones = [
    {
      id: 0,
      name: "Larry",
      upgrades: [0, 1],
      x: 7,
      y: 12,
      direction: -1,
      commandQueue: []
    },
    {
      id: 1,
      name: "Curly",
      upgrades: [2, 3, 4],
      x: 8,
      y: 12,
      direction: -1,
      commandQueue: []
    },
    {
      id: 2,
      name: "Moe",
      upgrades: [5],
      x: 9,
      y: 12,
      direction: -1,
      commandQueue: []
    }
  ];

export default {
  computer: {
    keybinding: {
      code: '',
      active: false
    },
    keybindings: {
      38: 'forward_video',
      40: 'back_video',
      37: 'left_video',
      39: 'right_video'
    },
    crtEffect: false,
    theme: 'green',
    loggedIn: 'hal',
    scripts: initialScripts,
    commandLine: {
      notification: '_↓ type commands below. Press \':\' to focus ↓_',
      logs: [
        'booting Space Trash v0.0.2...',
        "press ':' (colon) to enter command mode",
        "press 'esc' (escape) to exit command mode",
      ],
      focus: false,
      input: '',
    },
    commandToSubmit: false

  },
  schematicCursor: {
    x: 0,
    y: 0,
    mapCell: {}
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
  scriptEditingFile: ['foo'],

  activeVideoId: 1,

  clock: {
    time: Date.now(),
    lastTime: 0,
    halted: false,
  },

  drones: drones,

  idealizedWorld: {
    drones: drones.map((drone) => {
      return {
      id: drone.id,
      name: drone.name,
      upgrades: drone.upgrades,
      commandQueue: drone.commandQueue,
    }})
  },

  realizedWorld: {
    drones: drones.map((drone) => {
      return {
          id: drone.id,
          x: drone.x,
          y: drone.y,
          direction: drone.direction,
        }}),

    materializedMap: {}
  }
};
