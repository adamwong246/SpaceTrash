import getMaterializedMap from "./raycast/getMaterializedMap.ts";
import getRays from "./raycast/getRays.ts"
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
  const materializeMap = getMaterializedMap(drones, ship0.makeMap() )
  const screenStrips = getRays(materializeMap, drones.find((d) => d.id === droneWithActiveVideoId))
    return {
      materializeMap,
      screenStrips
    }
}

export default handlers
