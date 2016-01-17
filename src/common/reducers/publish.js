import {
    PUBLISH_GET_REQUEST,
    PUBLISH_GET_SUCCESS,
    PUBLISH_GET_FAILURE,
    TAG_GET_REQUEST,
    TAG_GET_SUCCESS,
    TAG_GET_FAILURE
} from '../actions/publish';
const initialState = {
	bl:0,
   	isFetching:false,
    error:null,
    tags:[]

};

export default function publish(state = initialState, action) {

     switch (action.type) {
        case TAG_GET_SUCCESS:
            const { data:tags,user } = action.req.data;
            console.log("laile");
            console.log(action.req);
            console.log("---------");
            return Object.assign(
                {},
                state,
                {
                    tags,
                    user
                }
            );
        case PUBLISH_GET_REQUEST:
            return state;
        case PUBLISH_GET_SUCCESS:
            return Object.assign({}, state.data, action.req.data.data);
        case PUBLISH_GET_FAILURE:
            return state;
        default:
            return state;
    }
}
