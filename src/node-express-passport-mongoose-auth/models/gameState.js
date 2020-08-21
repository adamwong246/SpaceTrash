const getRays = require("../getRays.js")
const executeInstructions = require("../executeInstructions.js")

const blankCharacter = "_"

// called by the main loop
// inputs a new set of commands
// and applies them to the game state, ordered by time
const executeCommands = (session, commandQueues) => {
  const mappedShips = session.gameState.shipsWithoutFogOfWar

  var gameState = session.gameState
  var userStates = session.userStates || {}

  const newUserStates = {}

  // for each instruction in commandQueue, ordered by time
  //// update gameState with drone position with collision detection

  var fullCommandQueue = []
  Object.keys(commandQueues).forEach((droneId) => {
    const droneCommandQueue = commandQueues[droneId].map((commandItem) => {
      return {
        droneId,
        timestamp: commandItem.timestamp,
        instruction: commandItem.instruction
      }
    })
    fullCommandQueue = fullCommandQueue.concat(droneCommandQueue)
  });

  const sortedFullCommandQueue = fullCommandQueue.sort((c) => c.timestamp)
  session.gameState.dronesWithoutRays = executeInstructions(session, sortedFullCommandQueue)


  // for each dronesWithoutRays
  //// getRays()
  //// for each castedRay
  ////// for each point of intrest
  //////// noteObservation()

  session.gameState.dronesWithoutRays.map((drone) => {

    const foundShip = mappedShips.filter((s) => drone.ship === s.id)[0]

    const rays = getRays(drone, foundShip.matrix);

    if(!newUserStates[drone.user]){
      newUserStates[drone.user] = {}
    }

    if(!newUserStates[drone.user].dronesWithRays){
      newUserStates[drone.user].dronesWithRays = []
    }

    const droneObject = drone;//.toObject()
    droneObject.rays = rays
    newUserStates[drone.user].dronesWithRays.push(droneObject)
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
    // .map((ship) => ship.toObject({virtuals: true}))
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
      shipsWithoutFogOfWar: mappedShips,
      dronesWithoutRays: drones
    }
    session.gameState = newGameState

};

// create the derived game stated presented to a user,
// rather than the full game state (Fog-of-War).
// Sets up the command queue and starts it with no-ops to trigger
// initial render of derived game state.
const initializeUserStates = (session) => {

  // give each drone a queue to hold instructions
  // initialize that queue to an array with a single no-op insutruction
  const noOpCommandQueue = {}
  session.gameState.dronesWithoutRays.forEach((drone) => {
    noOpCommandQueue[drone.id] = [{instruction: "NO_OP", timestamp: Date.now()}]
  })

  executeCommands(session, noOpCommandQueue)
  return
};

module.exports = {
  initializeState: (session, ships, drones) => {
    initializeGameState(session, ships, drones);
    initializeUserStates(session);
  },


  updateState: (session, commandQueues) => {
    executeCommands(session, commandQueues)
    return
  }
}
