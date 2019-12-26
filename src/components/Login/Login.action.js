export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAIL'

function loginRequestAction() {
  return {
    type: LOGIN_REQUEST
  }
}

function loginSuccessAction(payload) {
  return {
    type: LOGIN_SUCCESS,
    payload: payload
  }
}

function loginFailAction(error) {
  return {
    type: LOGIN_FAILURE,
    error: error
  }
}
