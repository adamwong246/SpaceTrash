const moveStepSize = 0.1;
// export const rotateStepSize = 0.05;
// export const commandQueueWaitTime = 3

module.exports = (session, command) => {

  // console.log("executeInstruction ", command)

  return session.gameState.dronesWithoutRays
    .map((drone) => {
      if (drone._id.toString() === command.droneId) {
        if (command.instruction === "DRONE_MOVE_FORWARD") {
          const roundOldX = Math.round(drone.x)
          const roundOldY = Math.round(drone.y)
          const newX = drone.x + Math.cos(drone.direction) * moveStepSize
          const newY = drone.y + Math.sin(drone.direction) * moveStepSize
          const roundNewX = Math.round(newX)
          const roundNewY = Math.round(newY)

          // check where we want to go
          const ship = session.gameState.shipsWithoutFogOfWar.filter((s) => {
            s.id == drone.ship
          })[0]

          // console.log(drone)
          // console.log(session.gameState.shipsWithoutFogOfWar)

          // console.log("oldX, oldX", drone.x, drone.y)
          // console.log("newX, newY", newX, newY)
          drone.x = newX
          drone.y = newY

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
          //     drone.y = newY
          //   }
          //
          //   //  the same for Y
          //   if (roundNewY !== roundOldY) {
          //     drone.x = newX
          //   }
          //
          // } else {
          //   drone.x = newX
          //   drone.y = newY
          // }
        }
      }
      return drone;
    })
}
