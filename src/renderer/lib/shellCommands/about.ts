import * as ActionTypes from "../../redux/actionTypes";

export default {
  description: "system details and mission",
  example: "about",
  args: 0,
  requireLogin: false,
  executor: (dispatch, args, store) => {

    dispatch({ type: ActionTypes.NEW_COMMAND,
      payload: "Mission: Dock with other spacecraft. Use your drones to gather the resources you need to survive."
    })

    dispatch({ type: ActionTypes.NEW_COMMAND,
      payload: [
        ['Turing Class:', "II"],
        ['Designation:', 'salvage'],
        ['Launch date:', "?"]
      ]
    })
  }
};
