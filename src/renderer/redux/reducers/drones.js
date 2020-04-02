import {
  ADD_DRONE,
  DRONE_MOVE,
  DRONE_ROTATE,
  TELEPORT
} from "../actionTypes";

const initialState = {};

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
    case DRONE_MOVE: {
      const {
        id,
        step
      } = action.payload;

      return state.map((d) => {
        if (d.id === id){


          return {
            ...d,
            x: d.x + Math.cos(d.direction) * step,
            y: d.y + Math.sin(d.direction) * step,
          }
        } else {
          return d
        }
      })
    }
    case DRONE_ROTATE: {
      const {
        id, step
      } = action.payload;
      // debugger
      return state.map((d) => {
        if (d.id === id){
          return {
            ...d,
            direction: d.direction + step
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
