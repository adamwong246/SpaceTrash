import * as ActionTypes from "../../redux/actionTypes";

export default {
  description: "about",
  example: "about",
  args: 0,
  requireLogin: true,
  executor: (dispatch, args, store) => {
    const currentShip = store.ships.find((s) => s.id === store.currentShip)
    const boardedShip = store.ships.find((s) => s.id === store.boardedShip)
    dispatch({ type: ActionTypes.NEW_COMMAND,
      payload: [
        ['', 'Ship', 'Docked with'],
        ['name', currentShip.name, boardedShip.name],
        ['id', currentShip.id, boardedShip.id],
        ['class', currentShip.class, boardedShip.class],
        ['model', currentShip.model, boardedShip.model],
        ['make', currentShip.make, boardedShip.make],
        ['year', currentShip.year, boardedShip.year],
      ]
    })
  }
};
