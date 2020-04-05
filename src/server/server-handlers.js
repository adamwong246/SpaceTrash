import getMaterializedMap from "./raycast/getMaterializedMap.ts";
import updatePositionsAndGetRaysAndMakeVisibleMap from "./raycast/updatePositionsAndGetRaysAndMakeVisibleMap.ts"
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

handlers['materializeMap'] = async (drones) => {
  console.log('handeling materializeMap')
  const shipMap = ship0.makeMap();

  const materializedMap = getMaterializedMap(drones, shipMap )
  // console.log(materializedMap)
  const {visibleDrones, visibleMap}  = updatePositionsAndGetRaysAndMakeVisibleMap(drones, materializedMap)

  // console.log(visibleMap, visibleDrones)
  return {
    visibleMap,
    drones: visibleDrones
  }
}

export default handlers
