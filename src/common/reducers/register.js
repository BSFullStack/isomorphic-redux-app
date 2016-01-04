import { REGISTER_GET_SUCCESS } from '../actions/register';
const initialState = {
    bl:0,
    msg:"",
    error:false
};

export default function register(state = initialState, action) {

    switch (action.type) {
        case REGISTER_GET_SUCCESS:

            return Object.assign({},state,action.req.data);
        default:
            return state;
    }
}
