const {
  fromJS,
  updateIn,
  setIn,
  List,
  update,
  Map
} = require('immutable')
const combineReducers = require("redux").combineReducers;

const renderDrone = require("../../renderDrone.ts");
const updateDrone = require("../../updateDrone.ts");

const initialState = require("../initialState.ts");

const blankCharacter = '_';

var groupBy = function(xs, key) {
  return xs.reduce(function(rv, x) {
    rv[x[key]] = x;
    return rv;
  }, {});
};

module.exports = combineReducers({
  myReducer: (state = initialState, action) => {

    switch (action.type) {
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

        const groupedShips = groupBy(mappedShips, 'id')
        const groupedDrones = groupBy(drones, 'id')

        return updateIn(updateIn(state, ['gameStates', sessionId, 'ships'], val => fromJS(groupedShips)), ['gameStates', sessionId, 'drones'], val => fromJS(groupedDrones))
      }

      case "ENQUEUE_INSTRUCTION": {
        const instruction = action.payload;

        // FIXME
        const sessionId = instruction.room.split('-')[1];
        const command = instruction.msg.enqueue.instruction
        const droneId = instruction.msg.enqueue.drone

        return updateIn(state,
          ['gameStates', sessionId, 'drones', droneId, 'instructions'],
          (v) => {
            return v ? v.push(command) : new List([command])
          }
        )
      }

      case "TICK": {
        return updateIn(state, ['gameStates'], (gameStates) => {

          if (!gameStates) {
            return new Map()
          }

          const sessions = gameStates.entrySeq();

          if (sessions.size < 1) {
            return new Map({})
          }

          const sessionReduction = sessions.reduce((sessionEntrySeqMemo, sessionEntrySeq) => {
            const sessionId = sessionEntrySeq[0]
            const session = sessionEntrySeq[1]

            return sessionEntrySeqMemo.set(sessionId,
              (
                session.updateIn(['drones'], (drones) => {
                  const dronesEntrySeqs = drones.entrySeq();
                  if (dronesEntrySeqs.size < 1) {
                    return new Map({})
                  }

                  const droneReduction = dronesEntrySeqs.reduce((droneEntrySeqMemo, dronesEntrySeq) => {
                    const droneId = dronesEntrySeq[0]
                    const drone = dronesEntrySeq[1]

                    const instructions = drone.get('instructions')
                    if (instructions && instructions.size) {
                      const instructionHead = instructions.get(0)
                      const instructionTail = instructions.slice(1).filter((x) => x)

                      const updatedDrone = updateDrone(drone.toJS(), instructionHead)

                      const d = drone.set('instructions', instructionTail)
                        .set('x', updatedDrone.x)
                        .set('y', updatedDrone.y)
                        .set('direction', updatedDrone.direction)

                      return droneEntrySeqMemo.set(droneId, d)
                    } else {
                      return droneEntrySeqMemo
                    }

                  }, drones)

                  return droneReduction

                })
              )
            )
          }, gameStates)

          return sessionReduction
        })
      }

      default:
        return state;
    }
    return state;
  },

});
