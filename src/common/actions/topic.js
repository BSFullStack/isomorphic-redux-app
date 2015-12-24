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

export function fetchTopics(category = 'reactjs') {
    return {
          type: TOPICS_GET,
          category,
          promise: request.get(`http://www.reddit.com/r/${category}.json`)
    }
}

function shouldFetchTopics(state, category) {

    const topics = state.topicsByCategory[category];

    if (!topics) {
        return true;
    } else if (topics.isFetching) {
        return false;
    } else {
        return topics.didInvalidate;
    }
}

export function fetchTopicsIfNeeded(reddit) {
    return (dispatch, getState) => {
      if (shouldFetchTopics(getState(), reddit)) {
        return dispatch(fetchTopics(reddit));
      }
    };
}
