const combineReducers = require("redux").combineReducers;

const getRays = require("../../../getRays.js");

const initialState = require("../initialState.ts");
const updateDrone = require("../../updateDrone.ts");

const blankCharacter = '_';

module.exports = combineReducers({

  gameStates: (state = initialState, action) => {
    switch (action.type) {

      case "TICK": {
        const newGameStates = Object.assign({}, state)

        Object.keys(newGameStates).forEach((sessionKey) => {
          const sessionState = newGameStates[sessionKey];

          // loop over the drones first to update positions
          Object.keys(newGameStates.drones).forEach((droneKey) => {
            const drone = newGameStates[sessionKey][droneKey];
            const instructions = drone.instructions

            const insutruction = insutructions.shift()

            // do the instruction
            newGameStates[sessionId][droneKey] = updateDrone(drone, insutruction)
          })

          // loop over the drones second to cast rays
          Object.keys(newGameStates.drones).forEach((droneKey) => {
            const drone = newGameStates[sessionKey][droneKey];
            const instructions = drone.instructions

            // do the render
            // do the instruction
            const foundShip = session.gameState.shipsWithoutFogOfWar.filter((s) => drone.ship === s.id)[0]
            newGameStates[sessionId][droneKey] = getRays(drone, foundShip.matrix)

          })


        })

        return newGameStates;
      }

      case "ENQUEUE_INSTRUCTION": {
        process.exit()
        const instruction = action.payload;
        const sessionId = instruction.sessionId;
        const command = instruction.command;

        return {
          ...state,
          [sessionId]: {
            ...state[sessionId],
            drones: {
              ...(state[sessionId] || {drones: {}}).drones,
              instructions: [
                ...(state[sessionId] || {drones: {instructions: []}}).drones.instructions,
                command
              ]
            }
          }
        }
      }

      case "INITIALIZE_SESSION": {

        const sessionId = action.payload.sessionId;
        const ships = action.payload.ships;
        const drones = action.payload.drones;

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
          return drone
        })

        return {
          ...state,
          [sessionId]: {
            ...state[sessionId],
            ships: mappedShips,
            drones: raycastedDrones,
            metadata: {
              timestamp: Date.now()
            }
          }
        }
      }
      default:
        return state;
    }
  },

});
