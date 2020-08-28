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
const updatedDroneRays = require("../updatedDroneRaysV2.ts");

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
        drones
      } = action.payload
      const height = ship.shipMap.yMax - ship.shipMap.yMin
      const width = ship.shipMap.xMax - ship.shipMap.xMin
      const depth = 2

      ship.matrix = new Array(height).fill(blankCharacter).map(() => new Array(width).fill(blankCharacter).map(() => new Array(depth).fill(blankCharacter)));

      for (var yNdx = 0; yNdx < height; yNdx++) {
        for (var xNdx = 0; xNdx < width; xNdx++) {
          const x = xNdx + ship.shipMap.xMin
          const y = yNdx + ship.shipMap.yMin
          if (ship.shipMap.gridMap[x][y]) {
            ship.matrix[yNdx][xNdx][0] = ship.shipMap.gridMap[x][y]
          }
        }
      }

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
        command,
        droneId,
        sessionId
      } = action.payload

      return updateIn(state,
        ['gameStates', sessionId, 'drones'],
        (drones) => {
          return drones.map((drone) => {
            if (drone.get("_id") == droneId.toString()) {
              return drone.update("instructions", (instructions) => {
                return instructions ? instructions.push(command) : new List([command])
              })
            }
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

            return session.updateIn(['drones'], (drones) => {
                return drones.map((drone) => {

                  const instructions = drone.get('instructions')

                  if (instructions && instructions.size) {
                    const instructionHead = instructions.get(0)
                    const instructionTail = instructions.slice(1).filter((x) => x)

                    const newDronePosition = updatedDronePosition(drone, instructionHead)

                    return drone.set('instructions', instructionTail)
                      .set('x', newDronePosition.get('x'))
                      .set('y', newDronePosition.get('y'))
                      .set('direction', newDronePosition.get('direction'))
                  } else {
                    const newDronePosition = updatedDronePosition(drone)
                    return drone
                      .set('x', newDronePosition.get('x'))
                      .set('y', newDronePosition.get('y'))
                      .set('direction', newDronePosition.get('direction'))
                  }
                })
                .map((drone) => {
                  const rays = updatedDroneRays(drone, shipMap)
                  return drone
                    .set('rays', rays)
                })


              })
              .updateIn(['users'], (users) => {
                return users.map((user) => {
                  return user.update("shipmap", (shipmap = new Map({})) => {
                    return session.get("drones")
                    .filter((drone) => {
                      return drone.get("user") == user.get("id")
                    })
                    .reduce((memo, drone) => {
                      return memo.push(drone)
                    }, new List([]))
                    .reduce((memo, drone) => {
                      if (drone.get("rays")) {
                        return memo.concat(drone.get("rays"))
                      } else {
                        return memo
                      }
                    }, new List([]))
                    .map((ray) => {
                      return ray.get("brenshams")
                    })
                    .flatten(1)
                    .reduce((memo, brensham) => {
                      return {
                        ...memo,
                        [brensham.get("x")]: {
                          ...memo[brensham.get("x")],
                          [brensham.get("y")]: brensham.get("tile")
                        }
                      }
                    }, shipmap)
                  })
                });
              })

          })
        }, gameStates)
      })
    }

    default:
      return state;
  }
  return state;
};
