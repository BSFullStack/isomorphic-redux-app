import {
    PUBLISH_GET_REQUEST,
    PUBLISH_GET_SUCCESS,
    PUBLISH_GET_FAILURE
} from '../actions/publish';
const initialState = {
	data:{
    	bl:0,
   	 	isFetching:false,
    	error:{}
	}
};

export default function publish(state = initialState, action) {

     switch (action.type) {
        case PUBLISH_GET_REQUEST:
            return state;
        case PUBLISH_GET_SUCCESS:
            console.log("****************发布成功***********************");
            return Object.assign({}, state, action.req.data.data);
        case PUBLISH_GET_FAILURE:
            return state;
        default:
            return state;
    }
}
