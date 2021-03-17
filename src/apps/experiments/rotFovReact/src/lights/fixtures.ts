import * as ROT from "rot-js";

import {Segment} from '../../vendor/2d-visibility/src/segment';

const width = 100;
const height = 100;
const levelMap: any[] = [];
const walls: any[] = [];
const wallMap = [];

new ROT.Map.Uniform(width, height, {}).create((x, y, value) => {
  if (value) {
    if (!levelMap[y]) {
      levelMap[y] = [];
    }

    levelMap[y][x] = value;
  }
});
new ROT.Map.Arena(width, height).create((x, y, value) => {
  if (value) {
    if (!levelMap[y]) {
      levelMap[y] = [];
    }

    levelMap[y][x] = value;
  }
});


levelMap.map((row, y) => {
  if (!wallMap[y]) {
    wallMap[y] = [];
  }

  row.map((value, x) => {
    if (value === 1) {
      wallMap[y][x] = {}; // check north

      if (y - 1 < 0 || levelMap[y - 1][x] != 1) {
        wallMap[y][x].north = true;
      } // check south


      if (y + 1 > levelMap.length - 1 || levelMap[y + 1][x] != 1) {
        wallMap[y][x].south = true;
      } // // check west


      if (x - 1 < 0 || levelMap[y][x - 1] != 1) {
        wallMap[y][x].west = true;
      } // check east


      if (x + 1 > levelMap[0].length - 1 || levelMap[y][x + 1] != 1) {
        wallMap[y][x].east = true;
      }
    }
  });
});
wallMap.map((row, y) => {
  row.map((wallBlock, x) => {
    const wall = {
      x,
      y,
      wallType: "foo"
    };

    if (wallBlock.north) {
      walls.push(new Segment(x, y, x + 1, y, wall));
    }

    if (wallBlock.south) {
      walls.push(new Segment(x, y + 1, x + 1, y + 1, wall));
    }

    if (wallBlock.west) {
      walls.push(new Segment(x, y, x, y + 1, wall));
    }

    if (wallBlock.east) {
      walls.push(new Segment(x + 1, y, x + 1, y + 1, wall));
    }
  });
});


export default {
  markers: {
    "x": 30.3,
    "y": 32.9
  }
};