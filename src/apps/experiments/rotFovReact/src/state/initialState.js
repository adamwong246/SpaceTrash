import * as ROT from "rot-js";

const levelMap = [];

var w = 30, h = 30;

new ROT.Map.Cellular(w, h).randomize(0.2).create((x, y, value) => {
  if (!levelMap[y]) {
    levelMap[y] = [];
  }
  levelMap[y][x] = value
});


new ROT.Map.Arena(w, h).create((x, y, value) => {
  if (!levelMap[y]) {
    levelMap[y] = [];
  }
  levelMap[y][x] = value || levelMap[y][x]
});

export default {
  levelMap
}