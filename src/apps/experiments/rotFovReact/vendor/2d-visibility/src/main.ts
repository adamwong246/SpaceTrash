import * as ROT  from "../node_modules/rot-js/lib/index.js";

import { drawScene } from './draw-scene';
import { loadMap } from './load-map';
import { calculateVisibility } from './visibility';
import { Rectangle } from './rectangle';
// import { Segment } from './segment';
import { Point } from './point';

const fudge = 10
var w = 10, h = 5;

const blocks: Array<any> = [];

// new ROT.Map.EllerMaze(w*fudge, h*fudge).create((x, y, value) => {
//   if (value) {
//     blocks.push(new Rectangle(x*fudge, y*fudge, fudge, fudge))
//   }
// });



new ROT.Map.Cellular(w*fudge, h*fudge).randomize(0.2).create((x, y, value) => {
  if (value) {
    blocks.push(new Rectangle(x*fudge, y*fudge, fudge, fudge))
  }
});


// new ROT.Map.Uniform(w*fudge, h*fudge, {}).create((x, y, value) => {
//   if (value) {
//     blocks.push(new Rectangle(x*fudge, y*fudge, fudge, fudge))
//   }
// });

// for (var i=0; i<4; i++) {
//     var display = new ROT.Display({width:w, height:h, fontSize:6});
//     SHOW(display.getContainer());
//     map.create(display.DEBUG);
// }

new ROT.Map.Arena(w*fudge, h*fudge).create((x, y, value) => {
  if (value) {
    blocks.push(new Rectangle(x*fudge, y*fudge, fudge, fudge))
  }
});

// Prepare canvas
const canvas = document.getElementById('scene') as HTMLCanvasElement;
if (!canvas) {
  throw new Error('Could not get element');
}
const ctx = canvas.getContext('2d');
if (!ctx) {
  throw new Error('Could not get context');
}
const xOffset = 0.5;
const yOffset = 0.5;
ctx.translate(xOffset, yOffset);

// Setup scene
// const room = new Rectangle(0, 0, w*fudge, h*fudge);

// const walls: Array<any> = [
//   // new Segment(20, 20, 20, 120),
//   // new Segment(20, 20, 100, 20),
//   // new Segment(100, 20, 150, 100),
//   // new Segment(150, 100, 50, 100),
// ];

// const blocks = [
//   new Rectangle(50, 150, 20, 20),
//   new Rectangle(150, 150, 40, 80),
//   new Rectangle(400, 400, 40, 40),
// ];


// const run = (lightSource: Point) => {
//   const endpoints = loadMap(room, blocks, walls, lightSource);
//   const visibility = calculateVisibility(lightSource, endpoints);

//   // requestAnimationFrame(() =>
//     // drawScene(ctx, lightSource, blocks, walls, visibility));
// };

// canvas.addEventListener('mousemove', ({ pageX, pageY }) => {
//   // run(new Point(pageX, pageY));
// });

// run(new Point(100, 100));
