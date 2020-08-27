const {
  fromJS,
  updateIn,
  setIn,
  List,
  update,
  Map
} = require('immutable')
const combineReducers = require("redux").combineReducers;

const renderDrone = require("../renderDrone.ts");
const updateDrone = require("../updateDrone.ts");

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

    case "MAKE_MOVE": {
      const {command, droneId, sessionId} = action.payload

      return updateIn(state, ['gameStates', sessionId, 'drones', droneId], (drone) => {
        const updatedDrone = updateDrone(drone.toJS(), command)
        const d = drone
          .set('x', updatedDrone.x)
          .set('y', updatedDrone.y)
          .set('direction', updatedDrone.direction)
        return d;
      })
    }

    default:
      return state;
  }
  return state;
};
