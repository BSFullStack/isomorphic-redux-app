import {
    SELECT_CATEGORY,
    INVALIDATE_CATEGORY,
    TOPICS_GET,
    TOPICS_GET_REQUEST,
    TOPICS_GET_SUCCESS,
    TOPICS_GET_FAILURE
} from '../actions/topic';

const initialState = {
    error: {},

    isFetching: false,
    didInvalidate: false,
    topics: []
}

function topics(state = initialState , action) {
    switch (action.type) {
        case INVALIDATE_CATEGORY:
            return Object.assign({}, state, {
                didInvalidate: true
            });
        case TOPICS_GET_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            });
        case TOPICS_GET_SUCCESS:
            console.log("****************请求成功***********************");
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                topics: action.topics,
                lastUpdated: action.receivedAt
            });
        case TOPICS_GET_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false
            });
        default:
            return state;
    }
}

export function selectedCategory(state = 'hot', action) {
    switch (action.type) {
        case SELECT_CATEGORY:
            return action.category;
        default:
            return state;
    }
}

export function topicsByCategory(state = { }, action) {
    switch (action.type) {
    case INVALIDATE_CATEGORY:
    case TOPICS_GET_REQUEST:
    case TOPICS_GET_SUCCESS:
        let topicsArray = [];

        if(action.req && action.req.data){

            let data = action.req.data.topics;
            topicsArray = data.children.map(child => child.data);
            console.log(topicsArray);
        }
        return Object.assign({}, state, {
            [action.category]: topics(state[action.category], {
              type: action.type,
              category: action.category,
              topics: topicsArray,
              receivedAt: Date.now()
            })
        });

    case TOPICS_GET_FAILURE:
        return Object.assign({}, state, {
            [action.category]: topics(state[action.category], {
              type: action.type,
              category: action.category,
              topics: [],
              receivedAt: Date.now(),
              error : {
                  status: action.error.status,
                  statusText : action.error.statusText
              }
            })
        });

    default:
        return state;
    }
}
