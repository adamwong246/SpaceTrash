const combineReducers = require("redux").combineReducers;

const getRays = require("../../../getRays.js");

const initialState = require("../initialState.ts");
const updateDrone = require("../../updateDrone.ts");

const blankCharacter = '_';

module.exports = combineReducers({

  gameStates: (state = initialState, action) => {
    switch (action.type) {

      case "TICK": {
        console.log("TICK", Date.now())
        const newGameStates = Object.assign({}, state)

        Object.keys(newGameStates).forEach((sessionKey) => {
          const sessionState = newGameStates[sessionKey];

          newGameStates[sessionKey].drones = newGameStates[sessionKey].drones
          .map((drone) => {

            if(drone.instructions && drone.instructions.length){
              return updateDrone(drone, drone.instructions.shift())
            } else {return drone}

          }).map((drone) => {
            if(drone.instructions && drone.instructions.length){
              const foundShip = newGameStates[sessionKey].ships.filter((s) => drone.ship === s.id)[0]
              drone.rays = getRays(drone, foundShip.matrix)
              return drone
            } else {return drone}
          })


        })

        return newGameStates;
      }

      case "ENQUEUE_INSTRUCTION": {
        const instruction = action.payload;

        console.log(instruction)

        // FIXME
        const sessionId = instruction.room.split('-')[1];
        const command = instruction.msg.enqueue.instruction
        const droneId = instruction.msg.enqueue.drone

        return {
          ...state,
          [sessionId]: {
            ...state[sessionId],
            drones: state[sessionId].drones.map((drone) => {
              if (!drone.instructions){drone.instructions = []}
              if (drone.id === droneId){drone.instructions.push(command)}
              return drone
            })
            // drones: {
            //   ...state[sessionId].drones,
            //   [droneId]: {
            //     ...state[sessionId].drones[droneId],
            //     instructions: [
            //       ...(state[sessionId].drones[droneId] || {instructions: []}).instructions,
            //       command
            //     ]
            //   }
            // }
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
