import { LOGIN_SUCCESS } from '../actions/login';
const initialState = {
    bl:0,
    msg:"",
    error:false
};

export default function login(state = initialState, action) {

    switch (action.type) {
        case LOGIN_SUCCESS:
            return Object.assign({},state,action.req.data);
        default:
            return state;
    }
}
