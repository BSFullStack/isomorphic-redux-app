import request from 'axios';
//登录
export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";
//注册
export const USER_SIGNUP = "USER_SIGNUP";
export const USER_SIGNUP_REQUEST = "USER_SIGNUP_REQUEST";
export const USER_SIGNUP_SUCCESS = "USER_SIGNUP_SUCCESS";
export const USER_SIGNUP_FAILURE = "USER_SIGNUP_FAILURE";
//登出
export const USER_LOGOUT = "USER_LOGOUT";
export const USER_LOGOUT_REQUEST = "USER_LOGOUT_REQUEST";
export const USER_LOGOUT_SUCCESS = "USER_LOGOUT_SUCCESS";
export const USER_LOGOUT_FAILURE = "USER_LOGOUT_FAILURE";


function _doLogin({ email , password }){
    return {
        type: USER_LOGIN,
        email ,
        password ,
        promise: request.post("http://localhost:8000/api/user/login",{email , password})
    }
}


/**
 * 登录
 * @param  {[type]}  [description]
 * @return {[type]}  [description]
 */
export function manualLogin({email,password}) {
    return (dispatch, getState) => {
        return dispatch(_doLogin({email,password}));
    };
}

