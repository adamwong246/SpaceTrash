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
      return {
        ...state,
        drones: state.drones.map((d) => {
          if (d.id === id){
            return {
              ...d,
              x: d.x + step
            }
          } else {
            return d
          }
        })
      };
    }
    case DRONE_ROTATE: {
      const {
        id
      } = action.payload;
      return state.map((d, ndx) => {
        return {
          ...d,
          direction: id === d.id ? d.direction + 1 : d.direction
        }
      })
    }



    default:
      return state;
  }
}
