import data from '../data.json'

const INITIAL_STATE = {
  products: data,
  cart: []
}

function rootReducer(state=INITIAL_STATE, action) {
  if (action.type === 'ADD_TO_CARD') {
    return {
      ...state,
      card: [
        ...state.cart, { ...action.item }
      ]
    }
  }
}

export default rootReducer