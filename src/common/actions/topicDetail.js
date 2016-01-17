import request from 'axios';
export const TOPICDETAIL = 'TOPICDETAIL';
export const TOPICDETAIL_REQUEST = 'TOPICDETAIL_REQUEST';
export const TOPICDETAIL_SUCCESS = 'TOPICDETAIL_SUCCESS';
export const TOPICDETAIL_FAILURE = 'TOPICDETAIL_FAILURE';

//发表答案
export const ADDANSWER = 'ADDANSWER';
export const ADDANSWER_REQUEST = 'ADDANSWER_REQUEST';
export const ADDANSWER_SUCCESS = 'ADDANSWER_SUCCESS';
export const ADDANSWER_FAILURE = 'ADDANSWER_FAILURE';



export function fetchTopicDetail({topicId}) {

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

        return dispatch(fetchTopicDetail({topicId}));
      }
    };
}

function _sendAnswer(topicId,answerContent){
    return {
        type: ADDANSWER,

        topicId,
        answerContent,
        promise: request.post("http://localhost:8000/topics/addAnswer",{topicId,answerContent})
    }
}

/**
 * 发表答案
 */
export function sendAnswer(topicId,answerContent){
    return (dispatch, getState) => {
        return dispatch(_sendAnswer(topicId,answerContent));
    };
}
