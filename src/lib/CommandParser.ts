import * as ActionTypes from "../renderer/redux/actionTypes";

const actions = Object.keys(ActionTypes);

export default {
  parse: (dispatch, value) =>{
    const split = value.split(' ')

    if (actions.includes(split[0])){
      const foundCommand = split[0]
      dispatch({type: ActionTypes.NEW_COMMAND, payload: `> ${foundCommand}`})

      if (split[0] === ActionTypes.SET_VIDEO){
        dispatch({type: ActionTypes.SET_VIDEO, payload: parseInt(split[1])})
      } else if (split[0] === ActionTypes.TELEPORT){

        dispatch(
          {
            type: ActionTypes.TELEPORT,
            payload: (
              {
                key: split[1],
                value: parseInt(split[2]),
              }
            )
          }
        )

      } else if (split[0] === ActionTypes.DRONE_MOVE){
        dispatch(
          {
            type: ActionTypes.DRONE_MOVE,
            payload: (
              {
                id: parseInt(split[1]),
                step: parseInt(split[2]),
              }
            )
          }
        )
        dispatch({type: ActionTypes.SET_COMMAND_WARNING, payload: `Drone on autopilot`})
        dispatch({type: ActionTypes.NEW_COMMAND, payload: `Drone on autopilot`})
      }
    } else {
      dispatch({type: ActionTypes.NEW_COMMAND, payload: `command "${value}" not found. Try one of the following ${actions.join(', ')}`})
      dispatch({type: ActionTypes.SET_COMMAND_WARNING, payload: `failed to parse: "${value}"`})
    }
    //

  }
}
