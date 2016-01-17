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
            const { data:tags } = action.req.data;
            return Object.assign(
                {},
                state,
                {
                    tags
                }
            );
        case PUBLISH_GET_REQUEST:
            return state;
        case PUBLISH_GET_SUCCESS:
            console.log("****************发布成功***********************");
            
            return Object.assign({}, state.data, action.req.data.data);
        case PUBLISH_GET_FAILURE:
            return state;
        default:
            return state;
    }
}
