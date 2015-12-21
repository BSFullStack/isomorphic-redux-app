import { REGISTER_SUCCESS } from '../actions/register';
const initialState = {
    bl:0,
    msg:""
};

export default function register(state = initialState, action) {

    switch (action.type) {
        case REGISTER_SUCCESS:

            return Object.assign({},state,action.response);
        default:
            return state;
    }
}
