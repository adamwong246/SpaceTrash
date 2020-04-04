import RayCastMap from "../../lib/raycast/RayCastMap.ts";
// import {IStrip} from "../lib/raycast/constantsAndTypes";
import ship from "../../lib/ship0.ts";

module.exports =  {
  clock: {
    time: Date.now(),
    lastTime: 0,
    halted: false,
  },
  computer: {
    crtEffect: false,
    theme: 'green',
    loggedIn: 'hal',
    scripts: {
      "hello": `
  (x) => {
    if (!x){
      return "Please give me a name to greet. ex: Hello World ";
    }
    return "Hello " + x;
  }
  `,

  "foo0": `
  (command) => {
    if (!command[1]){
      return "Please give me a number of foos to print. ex: foo0 3";
    }
    return Array.from(Array(parseInt(command[1])).keys()).map((i) => {
      log('foobar')
      return(i + foo);
    }).join(' - ');
  }
`,

"forward": `
(command) => {
  if (!command[1]){
    return "Please give me the id of a drone. ex: forward 3 5";
  }
  if (!command[2]){
    return "Please give me a number of steps to move forward. ex: forward 3 5";
  }
  const id = parseInt(command[1]);
  const steps = parseInt(command[2]);

  Array.from(Array(steps).keys()).map((i) => {
    exec('DRONE_MOVE_FORWARD', {id: id});
  }).join(' - ');
  return('drone ' + id + ' is on auto pilot')
}
`,

"left": `
(command) => {
  if (!command[1]){
    return "Please give me the id of a drone. ex: left 3 5";
  }
  if (!command[2]){
    return "Please give me a number of steps to move left. ex: left 3 5";
  }
  const id = parseInt(command[1]);
  const steps = parseInt(command[2]);

  Array.from(Array(steps).keys()).map((i) => {
    exec('DRONE_ROTATE_LEFT', {id: id});
  }).join(' - ');
  return('drone ' + id + ' is on auto pilot')
}
`,

"back": `
(command) => {
  if (!command[1]){
    return "Please give me the id of a drone. ex: back 3 5";
  }
  if (!command[2]){
    return "Please give me a number of steps to move back. ex: back 3 5";
  }
  const id = parseInt(command[1]);
  const steps = parseInt(command[2]);

  Array.from(Array(steps).keys()).map((i) => {
    exec('DRONE_MOVE_BACK', {id: id});
  }).join(' - ');
  return('drone ' + id + ' is on auto pilot')
}
`,

"right": `
(command) => {
  if (!command[1]){
    return "Please give me the id of a drone. ex: right 3 5";
  }
  if (!command[2]){
    return "Please give me a number of steps to move right. ex: right 3 5";
  }
  const id = parseInt(command[1]);
  const steps = parseInt(command[2]);

  Array.from(Array(steps).keys()).map((i) => {
    exec('DRONE_ROTATE_RIGHT', {id: id});
  }).join(' - ');
  return('drone ' + id + ' is on auto pilot')
}
`,

  },
    commandLine: {
      notification: '_↓ type commands below. Press \':\' to focus ↓_',
      logs: [
        'booting Space Trash v0...',
        'Adam Wong 2020'
      ],
      focus: Date.now(),
    },
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
  droneWithActiveVideo: 0,
  camera: {
    x: 0, //left
    y: 1000, // up
    z: -4000, // forward
    dx: -1,
    dy: 0,
    dz: 0,
    d: 90
  },
  scriptEditingFile: ['foo'],

  world: {
    drones: [
      {
        id: 0,
        name: "Larry",
        upgrades: [0, 1],
        x: 7,
        y: 12,
        direction: 0,
        commandQueue: []
      },
      {
        id: 1,
        name: "Curly",
        upgrades: [2, 3, 4],
        x: 6,
        y: 11,
        direction: 6,
        commandQueue: []
      },
      {
        id: 2,
        name: "Moe",
        upgrades: [5],
        x: 5,
        y: 11,
        direction: 9,
        commandQueue: []
      }
    ],
    ship
  },

  materializedWorld: {
    map: {},
    screen: []
  }
};
