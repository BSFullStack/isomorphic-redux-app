/**
 * 列表页Actions
 */
import request from 'axios';
export const BOOKS_GET = 'BOOKS_GET';
export const BOOKS_GET_REQUEST = 'BOOKS_GET_REQUEST';
export const BOOKS_GET_SUCCESS = 'BOOKS_GET_SUCCESS';
export const BOOKS_GET_FAILURE = 'BOOKS_GET_FAILURE';


/*
export function fetchBooks(data) {
    return (dispatch, getState) => {
        return dispatch(handlerFetchBooks(data));
    };
}
*/

export function fetchBooks(reddit = 'reactjs') {
    return {
        type: BOOKS_GET,
        reddit,
        promise: request.post(`http://localhost:3000/books/get`)
    }
}
