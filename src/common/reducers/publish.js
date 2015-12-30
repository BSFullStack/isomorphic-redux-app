import { PUBLISH_SUCCESS } from '../actions/publish';
const initialState = {
    bl:0,
    isFetching:false,
    error:{}
};

export default function publish(state = initialState, action) {

    switch (action.type) {
        case PUBLISH_SUCCESS:
            return Object.assign({},state,action.response);
        default:
            return state;
    }
}
