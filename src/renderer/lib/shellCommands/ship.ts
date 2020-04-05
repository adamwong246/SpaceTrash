import * as ActionTypes from "../../redux/actionTypes";

export default {
  description: "about",
  example: "about`",
  args: 0,
  requireLogin: true,
  executor: (dispatch, args, store) => {
    dispatch({ type: ActionTypes.NEW_COMMAND,
      payload: [
        ['', 'Ship', 'Docked with'],
        ['name', store.currentShip.name, store.boardedShip.name],
        ['id', store.currentShip.id, store.boardedShip.id],
        ['class', store.currentShip.class, store.boardedShip.class],
        ['model', store.currentShip.model, store.boardedShip.model],
        ['make', store.currentShip.make, store.boardedShip.make],
        ['year', store.currentShip.year, store.boardedShip.year],
      ]
    })
  }
};
