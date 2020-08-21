const getRays = require("../getRays.js")

const blankCharacter = "_"

var groupBy = function(xs, key) {
  return xs.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

const noteObservation = (state, drone, ray, payload) => {

}

const executeCommands = (session, drones, commandQueues) => {
  console.log("executeCommands", commandQueues);

  const mappedShips = session.gameState.shipsWithoutFogOfWar

  var gameState = session.gameState
  var userStates = session.userStates || {}

  const newUserStates = {}

  // for each command in commandQueue, ordered by time
  //// update gameState with drone position with collision detection

  const fullCommandQueue = []
  Object.keys(commandQueues).forEach((droneId) => {

    const droneCommandQueue = commandQueues[droneId].map((commandItem) => {
      return {
        droneId,
        timestamp: commandItem.timestamp,
        command: commandItem.command
      }
    })

    fullCommandQueue.concat(droneCommandQueue)
  });

  const sortedFullCommandQueue = fullCommandQueue.sort((c) => c.timestamp)

  sortedFullCommandQueue.forEach((c) => {
    console.log("executing instruction", c)
  })

  // for each dronesWithoutRays
  //// getRays()
  //// for each castedRay
  ////// for each point of intrest
  //////// noteObservation()
  const dronesWithRays = drones
  .map((drone) => drone.toObject({virtuals: true}))
  .map((drone) => {
    const foundShip = mappedShips[drone.ship][0]

    const rays = getRays(drone, foundShip.matrix);

    if(!newUserStates[drone.user]){
      newUserStates[drone.user] = {}
    }

    if(!newUserStates[drone.user].dronesWithRays){
      newUserStates[drone.user].dronesWithRays = {}
    }

    newUserStates[drone.user].dronesWithRays[drone.id] = drone
    newUserStates[drone.user].dronesWithRays[drone.id].rays = rays

    newUserStates[drone.user].shipsWithFogOfWar = [foundShip]
  })

  session.userStates = newUserStates
};

const initializeGameState = (session, ships, drones) => {
  // make hashMap
  // make gridMap from hashMap
  // place drones on gridMap
  // return gameState to be saved

  const mappedShips = ships
    .map((ship) => ship.toObject({virtuals: true}))
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

    const newGameState = {
      shipsWithoutFogOfWar: groupBy(mappedShips, "id"),
      dronesWithoutRays: groupBy(drones, "id")
    }
    session.gameState = newGameState

};

const initializeUserStates = (session, ships, drones) => {

  // call updateState with NO_OPs to generate inital rays
  const noOpCommandQueue = {}
  drones.forEach((drone) => {
    noOpCommandQueue[drone.id] = ["NO_OP"]
  })

  return executeCommands(session, drones, noOpCommandQueue)
};

module.exports = {
  initializeState: (session, ships, drones) => {
    initializeGameState(session, ships, drones);
    initializeUserStates(session, ships, drones);
  },


  updateState: (session, commandQueues, drones) => {
    return executeCommands(session, drones, commandQueues)
  }
}
