import {
    LOGIN_SUCCESS ,
    LOGIN_REQUEST ,
    LOGIN_FAILURE ,
    REGISTER_REQUEST ,
    REGISTER_SUCCESS ,
    REGISTER_FAILURE
} from '../actions/login';

const initialState = {
    data:{
        bl:0,
        msg:"",
        error:false
    }
};

//登录
export function login(state = initialState , action) {

    switch (action.type) {
        case LOGIN_REQUEST:
            return Object.assign({},initialState);
        case LOGIN_SUCCESS:

            return Object.assign({},state,action.req.data);
        default:

            return state;
    }
}


//注册
export function register(state = initialState , action) {
    
    switch (action.type) {
        case REGISTER_REQUEST:
            return Object.assign({},initialState);
        case REGISTER_SUCCESS:
            console.log("xxxx");
            return Object.assign({},state.data,action.req.data.data);
        default:

            return state;
    }
}

