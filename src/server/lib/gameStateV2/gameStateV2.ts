const getRays = require("../getRays.js");

const blankCharacter = '_';

const cache = {
  semaphore: "",
  session: {}, drone: {}
};

// const watchIt = (noun, id, subscriber) => {
//   if (!cache[noun][id]){
//     console.log(`tried to watch non-existent cache: ${noun} - ${id}`)
//   } else {
//     cache[noun][id]._subscriber = subscriber
//   }
//
// }

// set a thing
const cacheIt = (noun, id, value, semaphore) => {

  // if (!cache[noun][id]){
  //   cache[noun][id] = value
  //   return
  // }
  //
  // const subscriber = cache[noun][id]._subscriber
  //
  // if(subscriber){
  //   subscriber(noun, id, value)
  // }
  //
  // if(value.subscriber){
  //   value.subscriber(noun, id, value)
  //   value._subscriber = subscriber
  // }

  cache[noun][id] = value
}

// get a thing
const retrieveIt = (noun, id) => cache[noun][id]

// get all the things
const dumpIt = () => cache

// delete all the things
const deleteIt = () => cache = {
  semaphore: "the cache has been cleared",
  session: {}, drone: {}
}

// const renderDataViewV2 = (session) => {
//   return session.gameState.dronesWithoutRays.map((drone) => {
//     const foundShip = session.gameState.shipsWithoutFogOfWar.filter((s) => drone.ship === s.id)[0]
//     drone.rays = getRays(drone, foundShip.matrix)
//     cacheIt("drone", drone._id, drone)
//     return drone
//   })
// }
//
// const initializeUserStatesV2 = (sessionDocuments, shipsDocuments, dronesDocuments) => {
//   return renderDataViewV2(session)
// };

const initializeGameStateV2 = (session, ships, drones, semaphore = "init") => {
  // make hashMap
  // make gridMap from hashMap
  // place drones on gridMap
  // return gameState to be saved

  const mappedShips = ships
    .map((ship) => {
      if (ship.shipMap.gridMap) {

        const height = ship.shipMap.yMax - ship.shipMap.yMin
        const width = ship.shipMap.xMax - ship.shipMap.xMin
        const depth = 2
        const matrix = new Array(height).fill(blankCharacter).map(() => new Array(width).fill(blankCharacter).map(() => new Array(depth).fill(blankCharacter)));

        for (var yNdx = 0; yNdx < height; yNdx++) {
          for (var xNdx = 0; xNdx < width; xNdx++) {
            const x = xNdx + ship.shipMap.xMin
            const y = yNdx + ship.shipMap.yMin
            if (ship.shipMap.gridMap[x][y]) {
              matrix[yNdx][xNdx][0] = ship.shipMap.gridMap[x][y]
            }
          }
        }
        ship.matrix = matrix
      }
      return ship
    })
    .map((ship) => {
      if (ship.matrix) {
        drones.filter((drone) => drone.ship === ship.id)
          .forEach((drone) => {
            ship.matrix[Math.round(drone.y)][Math.round(drone.x)][1] = `drone-${drone.id}`
          })
      }
      return ship
    })
    .map((ship) => {
      ship.x = 0
      ship.y = 0
      return ship
    })

  const raycastedDrones = drones.map((drone) => {
    const foundShip = mappedShips.filter((s) => drone.ship === s.id)[0]
    drone.rays = getRays(drone, foundShip.matrix)
    cacheIt("drone", drone._id, drone)
    return drone
  })


  cacheIt("session", session._id, {
    timestamp: Date.now(),
    ships: mappedShips,
    drones: drones
  }, semaphore)

  watchIt("session", session._id, (noun, id, value) => {
    console.log("watchIt!", noun, id)
    // process.exit()
  })

};

module.exports = (socketServer, broadcaster) => {
  return {
    dumpIt,
    initializeGameStateV2
  }
}
