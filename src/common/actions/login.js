import request from 'axios';
export const LOGIN = "LOGIN";
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const REGISTER = "REGISTER";
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';


function _doLogin(params) {
      return {
            type: LOGIN,
            promise: request.post("http://localhost:8000/login",params)
      }
}

function _doRegister(params) {
      return {
            type: REGISTER,
            promise: request.post("http://localhost:8000/reg",params)
      }
}

export function doRegister(data) {
    return (dispatch, getState) => {
        return dispatch(_doRegister(data));
    };
}


export function doLogin(data) {
    return (dispatch, getState) => {
        return dispatch(_doLogin(data));
    };
}
