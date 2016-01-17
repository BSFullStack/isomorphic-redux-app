//登录
import {
    USER_LOGIN ,
    USER_LOGIN_REQUEST ,
    USER_LOGIN_SUCCESS ,
    USER_LOGIN_FAILURE ,
    USER_SIGNUP ,
    USER_SIGNUP_REQUEST  ,
    USER_SIGNUP_SUCCESS  ,
    USER_SIGNUP_FAILURE  ,
    USER_LOGOUT ,
    USER_LOGOUT_REQUEST  ,
    USER_LOGOUT_SUCCESS  ,
    USER_LOGOUT_FAILURE
} from '../actions/user'


const initialState= {
    isWaiting: false,
    authenticated: false
}
export default function user(state = initialState,action) {

    switch(action.type){
        case USER_LOGIN_REQUEST:
            return Object.assign({}, state, {
                isWaiting: true
            });

        case USER_LOGIN_SUCCESS:

            return Object.assign({}, state, {
                isWaiting: false,
                authenticated: true,
                ...action.req.data
            });

        case USER_LOGIN_FAILURE:
            return Object.assign({}, state, {
                isWaiting: false,
                authenticated: false
            });
        case USER_SIGNUP_REQUEST:
            return Object.assign({}, state, {
                isWaiting: true
            });
        case USER_SIGNUP_SUCCESS:
            return Object.assign({}, state, {
                isWaiting: false,
                authenticated: true
            });
        case USER_SIGNUP_FAILURE:
            return Object.assign({}, state, {
                isWaiting: false,
                authenticated: false
            });
        case USER_LOGOUT_REQUEST:
            return Object.assign({}, state, {
                isWaiting: true
            });
        case USER_LOGOUT_SUCCESS:
            return Object.assign({}, state, {
                isWaiting: false,
                authenticated: false
            });
        case USER_LOGOUT_FAILURE:
            return Object.assign({}, state, {
                isWaiting: false,
                authenticated: true
            });
        default:
            return state;
    }
}
