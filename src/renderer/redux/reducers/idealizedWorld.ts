import {moveStepSize, rotateStepSize} from "../../../lib/raycast/constantsAndTypes.ts";
import initialState from "../initialState.ts";

import {
  ADD_DRONE,
  DRONE_MOVE_FORWARD,
  DRONE_MOVE_BACK,
  DRONE_ROTATE_LEFT,
  DRONE_ROTATE_RIGHT,
  TELEPORT,
  DRONE_QUEUE
} from "../actionTypes";


const WAIT_TIME = 50;

export default function(idealizedWorldState = {}, action) {
  switch (action.type) {

  case 'SET_VIDEO': {
    return {
      ...idealizedWorldState,
      droneWithActiveVideo: action.payload
    }
  }
  case DRONE_QUEUE: {

    const {
      futureAction
    } = action.payload;
    const id = action.payload.payload

    const drones = (idealizedWorldState as any).drones.map((d) => {
      if (d.id === id) {
        const commands = d.commandQueue;
        const lastTime = commands[commands.length - 1] ? commands[commands.length - 1].timestamp : Date.now()
        const newCommand = {
          futureAction,
          timestamp: lastTime + WAIT_TIME,
          id: id
        }

        return {
          ...d,
          commandQueue: [
            ...d.commandQueue,
            newCommand
          ]
        }

      } else {
        return d
      }
    });

    return {
      ...idealizedWorldState,
      drones
    }
  }

  case 'CLEAR_QUEUE': {
    const timeToClear = action.payload;
    return {
      ...idealizedWorldState,
      drones: (idealizedWorldState as any).drones.map((d) => {
        return {
          ...d,
          commandQueue: d.commandQueue.filter((qc) => qc.timestamp > timeToClear)
        }
      })
    }
  }

  default:
    return idealizedWorldState;
  }
}

//     //
//     // case DRONE_QUEUE: {
//     //
//     //   // const {
//     //   //   futureAction
//     //   // } = action.payload;
//     //   // const id = action.payload.payload
//     //   //
//     //   // const drones = idealizedWorldState.idealizedWorld.drones.map((d) => {
//     //   //   if (d.id === id) {
//     //   //     const commands = d.commandQueue;
//     //   //     const lastTime = commands[commands.length - 1] ? commands[commands.length - 1].timestamp : Date.now()
//     //   //     const newCommand = {
//     //   //       futureAction,
//     //   //       timestamp: lastTime + WAIT_TIME,
//     //   //       id: id
//     //   //     }
//     //   //
//     //   //     return {
//     //   //       ...d,
//     //   //       commandQueue: [
//     //   //         ...d.commandQueue,
//     //   //         newCommand
//     //   //       ]
//     //   //     }
//     //   //   } else {
//     //   //     return d
//     //   //   }
//     //   // });
//     //   return idealizedWorldState
//     //   // return {
//     //   //   ...idealizedWorldState,
//     //   //   idealizedWorld: {
//     //   //     drones: drones
//     //   //   }
//     // }
//       // return dronesState.map((d) => {
//       //   if (d.id === id) {
//       //     const commands = d.commandQueue;
//       //     const lastTime = commands[commands.length - 1] ? commands[commands.length - 1].timestamp : Date.now()
//       //     const newCommand = {
//       //       futureAction,
//       //       timestamp: lastTime + WAIT_TIME,
//       //       id: id
//       //     }
//       //
//       //     return {
//       //       ...d,
//       //       commandQueue: [
//       //         ...d.commandQueue,
//       //         newCommand
//       //       ]
//       //     }
//       //   } else {
//       //     return d
//       //   }
//       // })
//     }
//     //
//     // // case ADD_DRONE: {
//     // //   return {
//     // //     ...dronesState,
//     // //     drones: [
//     // //       ...dronesState.drones,
//     // //       action.payload
//     // //     ]
//     // //   };
//     // // }
//     //
//     // case DRONE_MOVE_FORWARD: {
//     //   const {
//     //     id,
//     //   } = action.payload;
//     //
//     //   return {
//     //     ...idealizedWorldState,
//     //     drones: idealizedWorldState.drones.map((d) => {
//     //       if (d.id === id) {
//     //         return {
//     //           ...d,
//     //           x: d.x + Math.cos(d.direction) * moveStepSize,
//     //           y: d.y + Math.sin(d.direction) * moveStepSize,
//     //         }
//     //       } else {
//     //         return d
//     //       }
//     //     })
//     //   }
//     //   // return dronesState.map((d) => {
//     //   //   if (d.id === id) {
//     //   //     return {
//     //   //       ...d,
//     //   //       x: d.x + Math.cos(d.direction) * moveStepSize,
//     //   //       y: d.y + Math.sin(d.direction) * moveStepSize,
//     //   //     }
//     //   //   } else {
//     //   //     return d
//     //   //   }
//     //   // })
//     // }
//     //
//     // case DRONE_MOVE_BACK: {
//     //   const {
//     //     id,
//     //   } = action.payload;
//     //
//     //   return {
//     //     ...idealizedWorldState,
//     //     drones: idealizedWorldState.drones.map((d) => {
//     //       if (d.id === id) {
//     //         return {
//     //           ...d,
//     //           x: d.x - Math.cos(d.direction) * moveStepSize,
//     //           y: d.y - Math.sin(d.direction) * moveStepSize,
//     //         }
//     //       } else {
//     //         return d
//     //       }
//     //     })
//     //   }
//     // }
//     //
//     // case DRONE_ROTATE_RIGHT: {
//     //   const {
//     //     id,
//     //   } = action.payload;
//     //
//     //   return {
//     //     ...idealizedWorldState,
//     //     drones: idealizedWorldState.drones.map((d) => {
//     //       if (d.id === id) {
//     //         return {
//     //           ...d,
//     //           direction: d.direction + rotateStepSize
//     //         }
//     //       } else {
//     //         return d
//     //       }
//     //     })
//     //   }
//     // }
//     //
//     // // case DRONE_ROTATE_RIGHT: {
//     // //   const {
//     // //     id,
//     // //   } = action.payload;
//     // //   debugger
//     // //   return {
//     // //     ...idealizedWorldState,
//     // //     drones: idealizedWorldState.drones.map((d) => {
//     // //       if (d.id === id) {
//     // //         return {
//     // //           ...d,
//     // //           direction: d.direction + rotateStepSize
//     // //         }
//     // //       } else {
//     // //         return d
//     // //       }
//     // //     })
//     // //   }
//     // // }
//     //
//     // case DRONE_ROTATE_LEFT: {
//     //   const {
//     //     id,
//     //   } = action.payload;
//     //
//     //   return {
//     //     ...idealizedWorldState,
//     //     drones: idealizedWorldState.drones.map((d) => {
//     //       if (d.id === id) {
//     //         return {
//     //           ...d,
//     //           direction: d.direction - rotateStepSize
//     //         }
//     //       } else {
//     //         return d
//     //       }
//     //     })
//     //   }
//     // }
//     //
//     // // case DRONE_ROTATE_LEFT: {
//     // //   const {
//     // //     id,
//     // //   } = action.payload;
//     // //
//     // //   drones: idealizedWorldState.drones.map((d) => {
//     // //     if (d.id === id) {
//     // //       return {
//     // //         ...d,
//     // //         direction: d.direction - rotateStepSize
//     // //       }
//     // //     } else {
//     // //       return d
//     // //     }
//     // //   })
// //
// //
// //     default:
// //       return idealizedWorldState;
// //   }
// // }
