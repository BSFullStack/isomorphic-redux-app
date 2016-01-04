import request from 'axios';
export const REGISTER_GET = "REGISTER_GET";
export const REGISTER_GET_REQUEST = 'REGISTER_GET_REQUEST';
export const REGISTER_GET_SUCCESS = 'REGISTER_GET_SUCCESS';
export const REGISTER_GET_FAILURE = 'REGISTER_GET_FAILURE';

function handleRegister(params) {
      return {
            type: REGISTER_GET,
            promise: request.post("http://localhost:8000/reg",params)
      }
}

export function register(data) {
    return (dispatch, getState) => {
        return dispatch(handleRegister(data));
    };
}
