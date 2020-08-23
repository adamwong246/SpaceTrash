import * as ActionTypes from "../../redux/actionTypes";

export default {
  description: "list all user's scripts",
  example: "scripts",
  args: 0,
  requireLogin: false,
  executor: (dispatch, args, store) => {

    const scripts = store.computer.scripts;

    dispatch({ type: ActionTypes.NEW_COMMAND,
      payload: Object.keys(store.computer.scripts).join('\n')
    })

    // dispatch({ type: ActionTypes.NEW_COMMAND,
    //   payload: [
    //     ['Turing Class:', "II"],
    //     ['Designation:', 'salvage'],
    //     ['Launch date:', "?"]
    //   ]
    // })
  }
};
