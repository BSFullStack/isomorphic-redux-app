import {

    TOPICDETAIL_REQUEST,
    TOPICDETAIL_SUCCESS,
    TOPICDETAIL_FAILURE
} from '../actions/topic';

const initialState = {
    error: {},
    data: []
}

export default function topicDetail(state = initialState , action) {
    switch (action.type) {

        case TOPICDETAIL_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                data:[] ,
                didInvalidate: false
            });
        case TOPICDETAIL_SUCCESS:
            const { data } = state;
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                data,
                lastUpdated: action.receivedAt
            });
        case TOPICDETAIL_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false
            });
        default:
            return state;
    }
}
