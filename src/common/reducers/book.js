/**
 * 列表页rreducers
 */
import {
    BOOKS_GET_REQUEST,
    BOOKS_GET_SUCCESS,
    BOOKS_GET_FAILURE
} from '../actions/book';

/*const initialState =  {
    error: {},
    isFetching: false,
    didInvalidate: false,
    items: []
}*/
const initialState = {
    items:[]
}
export default function books(state = initialState, action) {
    switch (action.type) {
        case BOOKS_GET_REQUEST:
            return state;
        case BOOKS_GET_SUCCESS:
            console.log("****************请求成功***********************");
            return Object.assign({}, state, {
                items: []
            });
        case BOOKS_GET_FAILURE:
            return state;
        default:
            return state;
    }
}
