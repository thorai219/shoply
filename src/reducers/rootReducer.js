import data from '../data.json'
import { ADD_TO_CART, REMOVE_FROM_CART, APPLY_DISCOUNT } from '../actions/actionTypes'
import { calculateCartTotal } from '../actions/helpers'

const validDiscounts = {
  REMOVE10: 0.1,
  REMOVE20: 0.2,
  REMOVE30: 0.3
}

const INITIAL_STATE = {
  products: data.products,
  cartItems: {},
  cartValue: 0.0,
  discountApplied: false,
  discountAmount: 0
}


function rootReducer(state=INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      const cartCopy = { ...state.cartItems };
      cartCopy[action.id] = (cartCopy[action.id] || 0) + 1;
      return {
        ...state,
        cartItems: cartCopy,
        cartValue: calculateCartTotal(
          state.products,
          cartCopy,
          state.discountAmount
        )
      };
    }

    case REMOVE_FROM_CART: {
      const cartCopy = { ...state.cartItems }
      if (!cartCopy[action.id]) return state;
      cartCopy[action.id]--;
      if (cartCopy[action.id] === 0) {
        delete cartCopy[action.id]
      }
      return {
        ...state,
        cartItems: cartCopy,
        cartValue: calculateCartTotal(
          state.products,
          cartCopy,
          state.discountAmount
        )
      }
    }

    case APPLY_DISCOUNT: {
      if (state.discountApplied === false && validDiscounts[action.discount]) {
        const discountAmount = validDiscounts[action.discount]
        return {
          ...state,
          cartValue: calculateCartTotal(
            state.products,
            state.cartItems,
            discountAmount
          ),
          discountApplied: true,
          discountAmount
        }
      }
      console.log(state.discountAmount)
      return state
    }

    default: return state
  }
}

export default rootReducer