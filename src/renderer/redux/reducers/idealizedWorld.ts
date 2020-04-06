import {moveStepSize, rotateStepSize, commandQueueWaitTime} from "../../../lib/raycast/constantsAndTypes.ts";
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


export default function(idealizedWorldState = {}, action) {
  switch (action.type) {

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
          timestamp: lastTime + commandQueueWaitTime,
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
