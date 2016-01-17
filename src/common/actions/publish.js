import request from 'axios';
export const PUBLISH_GET = 'PUBLISH_GET';
export const PUBLISH_GET_REQUEST = 'PUBLISH_GET_REQUEST';
export const PUBLISH_GET_SUCCESS = 'PUBLISH_GET_SUCCESS';
export const PUBLISH_GET_FAILURE = 'PUBLISH_GET_FAILURE';


export const TAG_GET = 'TAG_GET';
export const TAG_GET_REQUEST = 'TAG_GET_REQUEST';
export const TAG_GET_SUCCESS = 'TAG_GET_SUCCESS';
export const TAG_GET_FAILURE = 'TAG_GET_FAILURE';
//发表问题
export function doPublish({title,content,tagId}) {
    return {
          type:PUBLISH_GET,
          title,
          content,
          tagId,
          promise: request.post("http://localhost:8000/ask/publish",{title,content,tagId})
    }
}
//获取所有标签
export function fetchTags(){
    return {
          type:TAG_GET,
          promise: request.post("http://localhost:8000/tags/getAll")
    }
}
