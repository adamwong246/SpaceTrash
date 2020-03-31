import { SET_CURRENT_SHIP } from "./actionTypes";

// let nextTodoId = 0;

export const setCurrentShip = content => ({
  type: SET_CURRENT_SHIP,
  payload: {
    id: ++nextTodoId,
    content
  }
});

// export const toggleTodo = id => ({
//   type: TOGGLE_TODO,
//   payload: { id }
// });
//
// export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
