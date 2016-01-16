import request from 'axios';
export const TOPICDETAIL = 'TOPICDETAIL';
export const TOPICDETAIL_REQUEST = 'TOPICDETAIL_REQUEST';
export const TOPICDETAIL_SUCCESS = 'TOPICDETAIL_SUCCESS';
export const TOPICDETAIL_FAILURE = 'TOPICDETAIL_FAILURE';




export function fetchTopicDetail(topicId) {

    return {
          type: TOPICDETAIL,
          topicId,
          promise: request.post("http://localhost:8000/topics/getDetail",{topicId})
    }
}

function shouldFetchTopicDetail(state, topicId) {
   // debugger;
    //const topicDetail = state.topicDetail;

    //if (!topicDetail) {
        return true;
    //} else if (topicDetail.isFetching) {
     //   return false;
   // } else {
   //     return topicDetail.didInvalidate;
   // }
}

export function fetchTopicDetailIfNeeded(topicId) {

    return (dispatch, getState) => {
      if (shouldFetchTopicDetail(getState(), topicId)) {

        return dispatch(fetchTopicDetail(topicId));
      }
    };
}
