import axios from 'axios'

export const PRODUCT_DETAIL_REQUEST = 'PRODUCT_DETAIL_REQUEST'
export const PRODUCT_DETAIL_SUCCESS = 'PRODUCT_DETAIL_SUCCESS'
export const PRODUCT_DETAIL_FAIL = 'PRODUCT_DETAIL_FAIL'

function productDetailRequestAction() {
    return {
        type: PRODUCT_DETAIL_REQUEST
    }
}

function productDetailSuccessAction(payload) {
    return {
        type: PRODUCT_DETAIL_SUCCESS,
        payload: payload
    }
}

function productDetailFailAction(error) {
    return {
        type: PRODUCT_DETAIL_FAIL,
        error: error
    }
}

export function getProductDetailById(id) {

  return async (dispatch) => {
    dispatch(productDetailRequestAction())
    try {
      const result = await axios({
        method: "GET",
        url: `https://mapi.sendo.vn/mob/product/${id}/detail/`
      })
  
      console.log(result, "result")
  
      dispatch(productDetailSuccessAction(result.data))
    } catch(error) {
      dispatch(productDetailFailAction(error))
    }
    
  }
}