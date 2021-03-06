import request from 'axios';

export const SELECT_CATEGORY = 'SELECT_TCATEGORY';
export const INVALIDATE_CATEGORY = 'INVALIDATE_CATEGORY';

export const TOPICS_GET = 'TOPICS_GET';
export const TOPICS_GET_REQUEST = 'TOPICS_GET_REQUEST';
export const TOPICS_GET_SUCCESS = 'TOPICS_GET_SUCCESS';
export const TOPICS_GET_FAILURE = 'TOPICS_GET_FAILURE';

export function selectCategory(category) {
  return {
      type: SELECT_CATEGORY,
      category
  };
}

export function invalidateCategory(category) {
    return {
      type: INVALIDATE_CATEGORY,
      category
    };
}

export function fetchTopics({category = 'hot'}) {

    return {
          type: TOPICS_GET,
          category,
          promise: request.post("http://localhost:8000/topics/get",{category})
    }
}

function shouldFetchTopics(state, category) {

    const topics = state.topicsByCategory[category];

    //if (!topics) {
        return true;
    //} else if (topics.isFetching) {
        //return false;
   // } else {
    //    return topics.didInvalidate;
    //}
}

export function fetchTopicsIfNeeded(reddit) {
    return (dispatch, getState) => {
      if (shouldFetchTopics(getState(), reddit)) {
        return dispatch(fetchTopics(reddit));
      }
    };
}


function _getTopics({pageIndex,pageSize,lastTime,category='hot'}) {
    return {
          type: TOPICS_GET,
          pageIndex,
          pageSize,
          lastTime,
          category,
          promise: request.post("http://localhost:8000/topics/get",{pageIndex,pageSize,lastTime,category})
    }
}
//获取更多
export function getTopics({pageIndex,pageSize,lastTime,category='hot'}) {
    return (dispatch, getState) => {
        return dispatch(_getTopics({pageIndex,pageSize,lastTime,category}));
    };
}

