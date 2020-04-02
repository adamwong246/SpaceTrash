import {
  ADD_DRONE,
  DRONE_MOVE_FORWARD,
  DRONE_MOVE_BACK,
  DRONE_ROTATE_LEFT,
  DRONE_ROTATE_RIGHT,
  TELEPORT
} from "../actionTypes";

const initialState = {};

const moveStepSize = 0.1;
const rotateStepSize = 0.1;

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_DRONE: {
      return {
        ...state,
        drones: [
          ...state.drones,
          action.payload
        ]
      };
    }

    case DRONE_MOVE_FORWARD: {
      const {
        id,
      } = action.payload;

      return state.map((d) => {
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

      return state.map((d) => {
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

      return state.map((d) => {
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

      return state.map((d) => {
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
      return state;
  }
}
