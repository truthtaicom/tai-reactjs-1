export const PRODUCT_LIST_REQUEST = 'PRODUCT_LIST_REQUEST'
export const PRODUCT_LIST_SUCCESS = 'PRODUCT_LIST_SUCCESS'
export const PRODUCT_LIST_FAIL = 'PRODUCT_LIST_FAIL'

function registerRequestAction() {
  return {
    type: PRODUCT_LIST_REQUEST
  }
}

function registerSuccessAction(payload) {
  return {
    type: PRODUCT_LIST_SUCCESS,
    payload: payload
  }
}

function registerFailAction(error) {
  return {
    type: PRODUCT_LIST_FAIL,
    error: error
  }
}
