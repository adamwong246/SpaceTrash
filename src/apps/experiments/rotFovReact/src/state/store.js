import { createStore } from 'redux'

import {
  ADD_SANDWICH,
  CHANGE_GRATUITY,
  CHANGE_SANDWICH_NAME,
  CHANGE_STAGED_SANDWICH_NAME,
  NEW_ORDER,
  POP_INGREDIENT,
  PUSH_INGREDIENT,
  REMOVE_SANDWICH,
  SELECT_INGREDIENT_TO_PUSH,
  INITIALIZE,
  COMPLETE_ORDER
} from "../state/Actions.js";

export default (initialState) => createStore((state = [], action) => {
  // console.log(action)
  switch (action.type) {
    
    case INITIALIZE:
      return {
        ...state,
        INITAILIZED: true
      }

    case REMOVE_SANDWICH:
      return {
        ...state,
        sandwiches: state.sandwiches.filter((s, ndx) => ndx !== action.payload)
      }

    case CHANGE_GRATUITY:
      return {
        ...state,
        gratuity: Math.max(action.payload, 0)
      }

    case SELECT_INGREDIENT_TO_PUSH:
      return {
        ...state,
        sandwiches: state.sandwiches.map((sandwich) => {
          if (sandwich.name === action.payload.sandwichName) {
            sandwich.toPush = action.payload.ingredientId
          }
          return sandwich
        })
      }

    case PUSH_INGREDIENT:
      return {
        ...state,
        sandwiches: state.sandwiches.map((sandwich, ndx) => {
          if (ndx === action.payload) {
            sandwich.recipe.push(sandwich.toPush)
            sandwich.toPush = ""
          }
          return sandwich
        }),
      }

    case POP_INGREDIENT:
      return {
        ...state,
        sandwiches: state.sandwiches.map((s) => {
          if (s.name === action.payload) {
            s.recipe.pop()
          }
          return s;
        })
      }

    case CHANGE_SANDWICH_NAME:
      return {
        ...state,
        sandwiches: state.sandwiches.map((s, ndx) => {
          if (ndx === action.payload.index) {
            s.name = action.payload.sandwichName
          }
          return s;
        })
      }

    case ADD_SANDWICH:
      return {
        ...state,
        stagedSandwich: "",
        sandwiches: [
          ...state.sandwiches,
          {
            name: state.stagedSandwich, recipe: [], toPush: ""
          }
        ]
      }

    case CHANGE_STAGED_SANDWICH_NAME:
      return {
        ...state,
        stagedSandwich: action.payload
      }

    case NEW_ORDER:
      const existingKeys = Object.keys(state.orders)
      return {
        ...state,
        sandwiches: [],
        orders: {
          ...state.orders,
          [Math.max(...(existingKeys.length ? existingKeys.map((oid) => parseInt(oid)) : [0])) + 1]: {
            grandTotal: action.payload,
            status: "open",
            sandwiches: state.sandwiches.map((s) => {
              return { name: s.name, recipe: s.recipe }
            })
          }
        },
        ingredients: state.ingredients.map((ingredient) => {
          state.sandwiches.forEach((sandwich) => {
            sandwich.recipe.forEach((ingredientId) => {
              if (ingredientId === ingredient.id) {
                ingredient.amount = ingredient.amount - 1
              }
            })
          })

          return ingredient
        })
      }

    case COMPLETE_ORDER:
      const newOrders = {};
      Object.keys(state.orders).forEach((ok) => {
        newOrders[ok] = state.orders[ok];
        if (ok === action.payload) {
          newOrders[ok].status = "closed";
        }

      })

      return {
        ...state,
        orders: newOrders
      }

    default:
      return state
  }
}, initialState)