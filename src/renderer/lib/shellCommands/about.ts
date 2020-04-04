import * as ActionTypes from "../../redux/actionTypes";

export default {
  description: "about",
  example: "about`",
  args: 0,
  executor: (dispatch, args, demoMode, loggedIn) => {
    dispatch({ type: ActionTypes.NEW_COMMAND, payload: `
Turing class: II
Designation: Salvage
Mission: Dock with other space craft. Use your drones to gather the resources you need to survive.
Launch date: ?
`     })
  }
};
