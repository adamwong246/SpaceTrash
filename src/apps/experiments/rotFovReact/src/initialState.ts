import { v4 as uuidv4 } from "uuid";

import xStateFixture from "./xStateFixture.ts";
import fixture1 from "./fixture1.ts";
import hoverPlugin from "./hoverPlugin";

export const initialState: IState = {
  clock: 0,
  droneIconSelected: null,
  droneIconHighlighted: null,
  menuOpenToDrone: null,
  fudge: 14, // zoom level

  // the dimensions of the map
  width: 25,
  height: 10,

  // knownMap: [],
  lightSource: {
    x: 0,
    y: 0,
  },
  // markers: [],
  menuOpen: null,
  mouseX: 0,
  mouseY: 0,
  preloadedMap: [],
  visibility: [],
  visibleMap: [],

  // knownMap: { segments: [], inverted: false },
  knownMap: {
    regions: [],
    inverted: false,
  },

  lightDistance: 100,
  cameraDistance: 25,

  showWallSegments: true,
  lightrays: true,
  camerarays: true,
  lightsPolygons: false,
  // showCameraPolygon: true,
  // lightsUnionPolygon: true,
  cameraLightsIntersectionPolygon: false,
  showLiveMap: false,

  drones: [
    {
      uid: uuidv4(),
      name: "bob",
      x: 1,
      y: 1,
      r: 1,
      triangles: [],
      plugins: [
        {
          xstate: xStateFixture,
          promiseState: {},
          uid: uuidv4(),
          name: "blinker",
        },
        {
          xstate: hoverPlugin,
          promiseState: {},
          uid: uuidv4(),
          name: "hovering unit 3",
        },
      ],
    },
    {
      uid: uuidv4(),
      name: "larry",
      x: 2,
      y: 2,
      r: 2,
      triangles: [],

      plugins: [
        {
          xstate: fixture1,
          promiseState: {},
          uid: uuidv4(),
          name: "blinker v0.9",
        },
        {
          xstate: hoverPlugin,
          promiseState: {},
          uid: uuidv4(),
          name: "hovering unit 2",
        },
      ],
    },

    {
      uid: uuidv4(),
      name: "curly",
      x: 3,
      y: 3,
      r: 3,
      triangles: [],

      plugins: [
        {
          xstate: hoverPlugin,
          promiseState: {},
          uid: uuidv4(),
          name: "hovering unit",
        },
      ],
    },
  ],
};
