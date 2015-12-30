import request from 'axios';
export const PUBLISH_GET = 'PUBLISH_GET';
export const PUBLISH_GET_REQUEST = 'PUBLISH_GET_REQUEST';
export const PUBLISH_GET_SUCCESS = 'PUBLISH_GET_SUCCESS';
export const PUBLISH_GET_FAILURE = 'PUBLISH_GET_FAILURE';

export function publish(category = 'hot') {
    return {
          type:PUBLISH_GET,
          category,
          promise: request.post("http://localhost:3000/topics/get",{category:category})
    }
}
