// import dataList from '../../data.json'
import axios from 'axios'

export const PRODUCT_LIST_REQUEST = 'PRODUCT_LIST_REQUEST'
export const PRODUCT_LIST_SUCCESS = 'PRODUCT_LIST_SUCCESS'
export const PRODUCT_LIST_FAIL = 'PRODUCT_LIST_FAIL'


function productListRequestAction() {
  return {
    type: PRODUCT_LIST_REQUEST
  }
}

function productListSuccessAction(payload) {
  return {
    type: PRODUCT_LIST_SUCCESS,
    payload: payload
  }
}

function productListFailAction(error) {
  return {
    type: PRODUCT_LIST_FAIL,
    error: error
  }
}

export function getProducts(name = "ao-so-mi-nam") {
  return async (dispatch) => {
    dispatch(productListRequestAction())
    try {
      const result = await axios({
        method: "GET",
        url: `https://mapi.sendo.vn/mob/product/cat/${name}?p=1`
      })
  
      console.log(result, "result")
  
      dispatch(productListSuccessAction(result.data.data))
    } catch(error) {
      dispatch(productListFailAction(error))
    }
    
  }
}
