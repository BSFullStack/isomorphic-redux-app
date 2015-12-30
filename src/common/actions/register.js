import request from 'axios';
export const REGISTER_GET = "REGISTER_GET";
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

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
