const {
  fromJS,
  updateIn,
  setIn,
  List,
  update,
  Map
} = require('immutable')
const combineReducers = require("redux").combineReducers;

const updatedDronePosition = require("../updatedDronePosition.ts");

const initialState = require("./initialState.ts");

const blankCharacter = '_';

var groupBy = function(xs, key) {
  return xs.reduce(function(rv, x) {
    rv[x[key]] = x;
    return rv;
  }, {});
};

module.exports = (state = initialState, action) => {

  switch (action.type) {
    case "INITIALIZE_SESSION": {
      const {
        sessionId,
        ship,
        users,
      } = action.payload

      const metaData = {
        xMin: Number.POSITIVE_INFINITY,
        yMin: Number.POSITIVE_INFINITY,
        xMax: Number.NEGATIVE_INFINITY,
        yMax: Number.NEGATIVE_INFINITY,
      }
      console.log(action.payload)
      Object.keys(ship.shipMap).forEach((xKey) => {
        Object.keys(ship.shipMap[xKey]).forEach((yKey) => {
          const xNumber = parseInt(xKey)
          const yNumber = parseInt(yKey)

          if (xNumber < metaData.xMin) {
            metaData.xMin = xNumber
          }
          if (xNumber > metaData.xMax) {
            metaData.xMax = xNumber
          }
          if (yNumber < metaData.yMin) {
            metaData.yMin = yNumber
          }
          if (yNumber > metaData.yMax) {
            metaData.yMax = yNumber
          }
        })
      })

      const height = metaData.yMax - metaData.yMin
      const width = metaData.xMax - metaData.xMin
      const depth = 2

      ship.matrix = new Array(height).fill(blankCharacter).map(() => new Array(width).fill(blankCharacter).map(() => new Array(depth).fill(blankCharacter)));

      for (var yNdx = 0; yNdx < height; yNdx++) {
        for (var xNdx = 0; xNdx < width; xNdx++) {
          const x = xNdx + metaData.xMin
          const y = yNdx + metaData.yMin
          if (ship.shipMap[x][y]) {
            ship.matrix[yNdx][xNdx][0] = ship.shipMap[x][y]
          }
        }
      }

      const drones = ship.drones;
      // state.updateIn(['gameStates', sessionId, 'ship'], val => fromJS(ship))
      //   .updateIn(['gameStates', sessionId, 'users'], val => fromJS(users.map((u) => {
      //     return {
      //       id: u._id.toString(),
      //       ...u
      //     }
      //   })))
      //   .updateIn(['gameStates', sessionId, 'drones'], val => fromJS(drones))

      return updateIn(
        updateIn(
          updateIn(
            state, ['gameStates', sessionId, 'ship'], val => fromJS(ship)
          ), ['gameStates', sessionId, 'users'], val => fromJS(users.map((u) => {
            return {
              id: u._id.toString(),
              ...u
            }
          }))
        ), ['gameStates', sessionId, 'drones'], val => fromJS(drones)
      )
    }

    case "ENQUEUE_INSTRUCTION": {
      const {
        commands,
        sessionId,
      } = action.payload

      console.log(action)
      debugger
      return updateIn(state,
        ['gameStates', sessionId, 'drones'],
        (drones) => {
          return drones.map((drone) => {

            return drone.update("instructions", (instructions = []) => {

              const commandsForDrone = new List(commands)
                .filter((c) => c.droneId == drone.get("id"))
                .map((c) => {
                  return c.action
                })

              return new List([]).concat(instructions, commandsForDrone)
            })
          })
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

        return sessions.reduce((sessionEntrySeqMemo, sessionEntrySeq) => {
          const sessionId = sessionEntrySeq[0]

          return sessionEntrySeqMemo.update(sessionId, (session) => {
            const shipMap = session.getIn(["ship", "matrix"])


            var instructionsDidRun = false;

            const updatedSession = session
              .updateIn(['drones'], (drones) => {
                return drones
                  .map((drone) => {

                    const instructions = drone.get('instructions') || new List([])

                    if (instructions.get(0)) {
                      const instructionHead = instructions.get(0)
                      const instructionTail = instructions.slice(1).filter((x) => x)

                      const newDronePosition = updatedDronePosition(drone, instructionHead)

                      instructionsDidRun = true

                      return drone.set('instructions', instructionTail)
                        .set('x', newDronePosition.get('x'))
                        .set('y', newDronePosition.get('y'))
                        .set('direction', newDronePosition.get('direction'))
                    } else {
                      return drone.set('instructions', new List([]))
                    }

                    return drone
                  })
              })

            return updatedSession
          })

        }, gameStates)
      })
    }

    default:
      return state;
  }
  return state;
};
