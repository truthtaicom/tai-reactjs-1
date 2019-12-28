import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from './ProductList.action'

const initialState = {
  loading: false,
  data: [],
  error: null
}

export default function productListReducer(state = initialState, action) {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return {
        ...state,
        loading: true
      }
    
    case PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      }

    case PRODUCT_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      }
  
    default:
      return state
  }
}