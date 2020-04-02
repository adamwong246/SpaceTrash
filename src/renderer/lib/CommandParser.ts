import * as ActionTypes from "../redux/actionTypes";

const actions = Object.keys(ActionTypes);

export default {
  parse: (dispatch, value) =>{
    const split = value.split(' ')

    dispatch({type: ActionTypes.NEW_COMMAND, payload: `> ${value}`})

    if (split[0] === 'help'){
      dispatch({type: ActionTypes.NEW_COMMAND, payload: "To list all system commands, try 'commands'.\nUse 'help [SYSTEM_COMMAND]'' for further information"})
      return;
    } else if(split[0] === 'commands'){
      dispatch({type: ActionTypes.NEW_COMMAND, payload: actions.join('\n')})
      return;
    }

    if (actions.includes(split[0])){
      const foundCommand = split[0]



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
                step: parseFloat(split[2]),
              }
            )
          }
        )
        dispatch({type: ActionTypes.SET_COMMAND_WARNING, payload: `Drone on autopilot`})
        dispatch({type: ActionTypes.NEW_COMMAND, payload: `Drone on autopilot`})
      } else if (split[0] === ActionTypes.DRONE_ROTATE){
        dispatch(
          {
            type: ActionTypes.DRONE_ROTATE,
            payload: (
              {
                id: parseInt(split[1]),
                step: parseFloat(split[2]),
              }
            )
          }
        )
        dispatch({type: ActionTypes.SET_COMMAND_WARNING, payload: `${parseInt(split[1])} rotating by ${parseInt(split[2])}`})
        dispatch({type: ActionTypes.NEW_COMMAND, payload: `${parseInt(split[1])} rotating by ${parseInt(split[2])}`})
      }
    } else {
      dispatch({type: ActionTypes.NEW_COMMAND, payload: `command "${value}" not found. Try "help"`})
      dispatch({type: ActionTypes.SET_COMMAND_WARNING, payload: `failed to parse: "${value}"`})
    }
    //

  }
}
