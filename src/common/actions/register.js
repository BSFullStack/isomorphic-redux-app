import fetch from 'isomorphic-fetch';
import { CALL_API } from '../api/api-promise-middleware';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

function handleRegister(params) {

    return {
        [CALL_API]: {
            types: [REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE],
            endpoint: `user/reg`,
            params: params,
            method: "POST"
        }
    };
}
export function register(data) {
    return (dispatch, getState) => {
        return dispatch(handleRegister(data));
    };
}
