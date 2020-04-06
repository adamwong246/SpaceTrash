// import RayCastMap from "../../lib/raycast/RayCastMap.ts";
// import {emptyStrip} from "../../lib/raycast/constantsAndTypes.ts";
import {moveStepSize, rotateStepSize} from "../../lib/raycast/constantsAndTypes.ts";
import getRays from "./getRays.ts";

export default (drones, materializedMap) => {

  const updatedDrones = drones.map((drone) => {

      const droneWithCorrectPosition= drone.commandQueue.reduce((mm, command) => {




            // TODO refactor this
            if (command.futureAction === "DRONE_MOVE_FORWARD"){

              const roundOldX = Math.round(drone.x)
              const roundOldY = Math.round(drone.y)
              const newX = drone.x + Math.cos(drone.direction) * moveStepSize
              const newY = drone.y + Math.sin(drone.direction) * moveStepSize
              const roundNewX = Math.round(newX)
              const roundNewY = Math.round(newY)

              // check where we want to go
              if(materializedMap.get(roundNewX, roundNewY).type === 'wall'){

                // if we have moved left or right into a vertical wall
                if(roundNewX !== roundOldX){
                  // discard the x component of the move
                  mm.y = newY
                }

                //  the same for Y
                if(roundNewY !== roundOldY){
                  mm.x = newX
                }

              } else {
                  mm.x = newX
                  mm.y = newY
              }
            }

            if (command.futureAction === "DRONE_MOVE_BACK"){

              const roundOldX = Math.round(drone.x)
              const roundOldY = Math.round(drone.y)
              const newX = drone.x + Math.cos(drone.direction) * -moveStepSize
              const newY = drone.y + Math.sin(drone.direction) * -moveStepSize
              const roundNewX = Math.round(newX)
              const roundNewY = Math.round(newY)

              // check where we want to go
              if(materializedMap.get(roundNewX, roundNewY).type === 'wall'){

                // if we have moved left or right into a vertical wall
                if(roundNewX !== roundOldX){
                  // discard the x component of the move
                  mm.y = newY
                }

                //  the same for Y
                if(roundNewY !== roundOldY){
                  mm.x = newX
                }

              } else {
                  mm.x = newX
                  mm.y = newY
              }
            }




            if (command.futureAction === "DRONE_ROTATE_LEFT"){
                mm.direction = drone.direction - rotateStepSize
            }

            if (command.futureAction === "DRONE_ROTATE_RIGHT"){
                mm.direction = drone.direction + rotateStepSize
            }

            return mm;
      }, drone)

      // console.log('droneWithCorrectPosition', droneWithCorrectPosition)
      return droneWithCorrectPosition

  }).map((drone) => {
    drone.rays =  getRays(materializedMap, drone)

    // drone.rays.forEach(ray => {
    //     const cell = materializedMap.get(ray.endX, ray.endY)
    //     cell.type = 'wall'
    //     materializedMap.set(ray.endX, ray.endY, cell)
    // });

    return drone
  })

  return {
    visibleMap: materializedMap,
    visibleDrones: updatedDrones
  }

}
