import getMaterializedMap from "./raycast/getMaterializedMap.ts";
import castRays from "./castRays.ts"
import ship0 from "../lib/ship0.ts"
import {screenWidth, emptyStrip, stripWidth} from "../lib/raycast/constantsAndTypes.ts"

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

handlers['materializeMap'] = async ({drones, ship, droneWithActiveVideoId}) => {
  console.log('materializeMap')
  // console.log(drones, ship0, droneWithActiveVideoId)
  const materializeMap = getMaterializedMap(drones, ship0.makeMap() )

  const screenStrips = [];
  for (var i=0;i<screenWidth;i+=stripWidth) {
    var strip = emptyStrip
    strip.style.position = "absolute";
    strip.style.height = 0;//"0px";
    strip.style.left = strip.style.top = 0;//"0px";
    strip.style.src = "images/walls_3.png";
    screenStrips.push(strip);
  }
  const rays = castRays(
    materializeMap.sizeX,
    materializeMap.sizeY,
    materializeMap,
    drones.find((d) => d.id === droneWithActiveVideoId),
    screenStrips
  );

    return {
      materializeMap,
      screenStrips
    }
}

export default handlers
