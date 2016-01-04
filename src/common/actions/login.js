import request from 'axios';
export const LOGIN = "LOGIN";
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

function _doLogin(params) {
      return {
            type: LOGIN,
            promise: request.post("http://localhost:8000/login",params)
      }
}

export function doLogin(data) {
    return (dispatch, getState) => {
        return dispatch(_doLogin(data));
    };
}
