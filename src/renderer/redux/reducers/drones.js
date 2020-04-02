import {
  ADD_DRONE,
  DRONE_MOVE_FORWARD,
  DRONE_MOVE_BACK,
  DRONE_ROTATE_LEFT,
  DRONE_ROTATE_RIGHT,
  TELEPORT,
  DRONE_QUEUE
} from "../actionTypes";

const initialState = {};

const moveStepSize = 0.2;
const rotateStepSize = 0.1;

export default function(dronesState = initialState, action) {
  switch (action.type) {

    case 'CLEAR_QUEUE': {
      const timeToClear = action.payload;
      return dronesState.map((d) => {
        return {
          ...d,
          commandQueue: d.commandQueue.filter((qc) => qc.timestamp > timeToClear)
        }
      })
    }

    case DRONE_QUEUE: {

      const {
        futureAction
      } = action.payload;
      const id = action.payload.payload

      return dronesState.map((d) => {
        if (d.id === id){
          const commands = d.commandQueue;
          const lastTime = commands[commands.length-1 ] ? commands[commands.length-1 ].timestamp : Date.now()
          const newCommand = {
            futureAction,
            timestamp: lastTime + 100,
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
      })
    }

    case ADD_DRONE: {
      return {
        ...dronesState,
        drones: [
          ...dronesState.drones,
          action.payload
        ]
      };
    }

    case DRONE_MOVE_FORWARD: {
      const {
        id,
      } = action.payload;
      return dronesState.map((d) => {
        if (d.id === id){
          return {
            ...d,
            x: d.x + Math.cos(d.direction) * moveStepSize,
            y: d.y + Math.sin(d.direction) * moveStepSize,
          }
        } else {
          return d
        }
      })
    }

    case DRONE_MOVE_BACK: {
      const {
        id,
      } = action.payload;

      return dronesState.map((d) => {
        if (d.id === id){
          return {
            ...d,
            x: d.x - Math.cos(d.direction) * moveStepSize,
            y: d.y - Math.sin(d.direction) * moveStepSize,
          }
        } else {
          return d
        }
      })
    }

    case DRONE_ROTATE_RIGHT: {
      const {
        id,
      } = action.payload;

      return dronesState.map((d) => {
        if (d.id === id){
          return {
            ...d,
            direction: d.direction + rotateStepSize
          }
        } else {
          return d
        }
      })
    }

    case DRONE_ROTATE_LEFT: {
      const {
        id,
      } = action.payload;

      return dronesState.map((d) => {
        if (d.id === id){
          return {
            ...d,
            direction: d.direction - rotateStepSize
          }
        } else {
          return d
        }
      })


    }
    default:
      return dronesState;
  }
}
