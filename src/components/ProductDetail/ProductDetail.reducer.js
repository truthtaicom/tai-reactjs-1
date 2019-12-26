import { PRODUCT_DETAIL_FAIL, PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS } from './ProductDetail.action'

const initialState = {
  loading: false,
  data: null,
  error: null
}

export default function productDetailReducer(state = initialState, action) {
  switch (action.type) {
    case PRODUCT_DETAIL_REQUEST:
      return {
        ...state,
        loading: true
      }
    
    case PRODUCT_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      }

    case PRODUCT_DETAIL_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      }
  
    default:
      return state
  }
}