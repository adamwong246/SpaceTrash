// const getMaterializedMap = require('./raycast/getMaterializedMap.ts').getMaterializedMap;
// import {getMaterializedMap} from './raycast/getMaterializedMap.ts';
// import {castRays} from './raycast/castRays.ts';
const castRays = require("./castRays.js")


let handlers = {}

handlers._history = []

handlers['factorial'] = async ({ num }) => {
  handlers._history.push(num)

  function fact(n) {
    if (n === 1) {
      return 1
    }
    return n * fact(n - 1)
  }

  console.log('making factorial')
  return fact(num)
}

handlers['ping'] = async () => {
  console.log('pinged')
  return 'pong'
}

handlers['video'] = async (world) => {
  // const maeterializeMap = getMaterializedMap(drones,shipMap )

  const screenStrips = [];
  for (var i=0;i<screenWidth;i+=stripWidth) {
    var strip = emptyStrip
    strip.style.position = "absolute";
    strip.style.height = 0;//"0px";
    strip.style.left = strip.style.top = 0;//"0px";
    strip.style.src = "images/walls_3.png";
    screenStrips.push(strip);
  }
  // const rays = return castRays(
  //   map.sizeX,
  //   map.sizeY,
  //   map,
  //   drone,
  //   screenStrips)
  //
  //   return rays
  return [];
}

module.exports = handlers
