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
const updatedDroneRays = require("../updatedDroneRaysV3.ts");

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
        commands,
        sessionId,
      } = action.payload

      console.log(action)

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

              return new List([]).concat(instructions,commandsForDrone)
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
                // .map((drone) => {
                //   if (instructionsDidRun) {
                //     return drone.set('rays', updatedDroneRays(drone, shipMap))
                //   } else {
                //     return drone
                //   }
                // })
              })

              // if(instructionsDidRun){
              //   return updatedSession.updateIn(['users'], (users) => {
              //     return users.map((user) => {
              //       return user.update("shipmap", (shipmap = new Map({})) => {
              //
              //         return session.get("drones")
              //           .filter((drone) => {
              //             return drone.get("user") == user.get("id")
              //           })
              //           .reduce((memo, drone) => {
              //             return memo.push(drone)
              //           }, new List([]))
              //           .reduce((memo, drone) => {
              //             if (drone.get("rays")) {
              //               return memo.concat(drone.get("rays"))
              //             } else {
              //               return memo
              //             }
              //           }, new List([]))
              //           .map((ray) => {
              //             return ray.get("brenshams")
              //           })
              //           .flatten(1)
              //           .reduce((memo, brensham) => {
              //             return {
              //               ...memo,
              //               [brensham.get("x")]: {
              //                 ...memo[brensham.get("x")],
              //                 [brensham.get("y")]: brensham.get("tile")
              //               }
              //             }
              //           }, shipmap)
              //       })
              //     });
              //   })
              // } else {
              //   return updatedSession
              // }




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
