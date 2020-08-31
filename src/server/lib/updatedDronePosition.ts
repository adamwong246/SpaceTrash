const { fromJS, List, Map } = require('immutable');
const moveStepSize = 0.1;
const rotateStepSize = 0.1;

function rounder(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

module.exports = (drone, command) => {

  var x = drone.get("x")
  var y = drone.get("y")
  var direction = drone.get("direction")

  if (command === "FORWARD") {
    const roundOldX = Math.round(drone.get("x"))
    const roundOldY = Math.round(drone.get("y"))
    const newX = drone.get("x") + Math.cos(drone.get("direction")) * moveStepSize
    const newY = drone.get("y") + Math.sin(drone.get("direction")) * moveStepSize
    const roundNewX = Math.round(newX)
    const roundNewY = Math.round(newY)

    // check where we want to go
    // const ship = session.gameState.shipsWithoutFogOfWar.filter((s) => {
    //   s.id == drone.ship
    // })[0]

    // console.log(drone)
    // console.log(session.gameState.shipsWithoutFogOfWar)

    // console.log("oldX, oldX", drone.get("x");, drone.get("y");)
    // console.log("newX, newY", newX, newY)
    x = newX
    y = newY

    // session.gameState.dronesWithoutRays.forEach((d) => {
    //   console.log("mark0")
    //   if(d._id.toString() === drone._id.toString()){
    //     console.log("mark1")
    //     d.x =  newX
    //     d.y = newY
    //   }
    // })

    // if (ship.matrix[roundNewY][roundNewX][0] = 'B') { // B for "bulkhead"
    //   // if (materializedMap.get(roundNewX, roundNewY).type === 'wall') {
    //
    //   // if we have moved left or right into a vertical wall
    //   if (roundNewX !== roundOldX) {
    //     // discard the x component of the move
    //     drone.get("y"); = newY
    //   }
    //
    //   //  the same for Y
    //   if (roundNewY !== roundOldY) {
    //     drone.get("x"); = newX
    //   }
    //
    // } else {
    //   drone.get("x"); = newX
    //   drone.get("y"); = newY
    // }
  }
  else if (command === "BACK") {

    const roundOldX = Math.round(drone.get("x"))
    const roundOldY = Math.round(drone.get("y"))
    const newX = drone.get("x") + Math.cos(drone.get("direction")) * -moveStepSize
    const newY = drone.get("y") + Math.sin(drone.get("direction")) * -moveStepSize
    const roundNewX = Math.round(newX)
    const roundNewY = Math.round(newY)

    x = newX
    y = newY

    // // check where we want to go
    // if (materializedMap.get(roundNewX, roundNewY).type === 'wall') {
    //
    //   // if we have moved left or right into a vertical wall
    //   if (roundNewX !== roundOldX) {
    //     // discard the x component of the move
    //     drone.get("y"); = newY
    //   }
    //
    //   //  the same for Y
    //   if (roundNewY !== roundOldY) {
    //     drone.get("x"); = newX
    //   }
    //
    // } else {
    //   drone.get("x"); = newX
    //   drone.get("y"); = newY
    // }
  }
  else if (command === "LEFT") {
    direction = drone.get("direction") - rotateStepSize
  }
  else if (command === "RIGHT") {
    direction = drone.get("direction") + rotateStepSize
  }
  else {
    console.log("I don't recognize the command", command)
  }

  console.log(x, y, direction);

  return new Map({
    x: rounder(x, 2),
    y: rounder(y, 2),
    direction: rounder(direction, 2),
  });
}
