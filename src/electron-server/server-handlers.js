// import getMaterializedMap from "./raycast/getMaterializedMap.ts";
// import updatePositionsAndGetRaysAndMakeVisibleMap from "./raycast/updatePositionsAndGetRaysAndMakeVisibleMap.ts"
// import ship0 from "../lib/ship0.ts"
// import {screenWidth, emptyStrip, stripWidth} from "../lib/raycast/constantsAndTypes.ts"



// handlers['materializeMap'] = async (drones) => {
//   // console.log('materializeMap ->')
//   const start = Date.now()
//   const shipMap = ship0.makeMap();
//   const materializedMap = getMaterializedMap(drones, shipMap )
//   const {visibleDrones, visibleMap}  = updatePositionsAndGetRaysAndMakeVisibleMap(drones, materializedMap)
//   console.log('<- materializeMap', Date.now() - start)
//
//   return {
//     visibleMap,
//     drones: visibleDrones
//   }
// }

export default (ping) => {

  let handlers = {}

  handlers._history = []

  handlers['ping'] = async () => {
    console.log('pinged')
    return 'pong'
  }

  handlers['ping2'] = async () => {
    console.log('pinged2')
    ping()
    return 'pong2'
  }

  return handlers;
}
