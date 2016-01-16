import {
    TOPICDETAIL,
    TOPICDETAIL_REQUEST,
    TOPICDETAIL_SUCCESS,
    TOPICDETAIL_FAILURE
} from '../actions/topicDetail';

const initialState = {

    error: false,
    isFetching:false,
    data:null

}

export default function topicDetail(state = initialState , action) {

    switch (action.type) {

        case TOPICDETAIL_REQUEST:

            return Object.assign({}, state, {
                isFetching: true,
                data:null
            });
        case TOPICDETAIL_SUCCESS:

            const { data } = action.req.data;
            return Object.assign({}, state, {
                isFetching: false,
                data
            });
        case TOPICDETAIL_FAILURE:
            return Object.assign({}, state, {
                isFetching: false
            });
        default:
            return state;
    }
}
