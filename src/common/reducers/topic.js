import {
    SELECT_CATEGORY,
    INVALIDATE_CATEGORY,
    TOPICS_GET,
    TOPICS_GET_REQUEST,
    TOPICS_GET_SUCCESS,
    TOPICS_GET_FAILURE
} from '../actions/topic';
import _ from 'lodash';
const initialState = {
    error: {},
    count:0,
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


          /*  const { topics } = state[action.category];
            topics.concat(action.topics);*/
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                topics: action.topics,
                count:action.count,
                user:action.user,
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
        let count = 0;
        let result = [];
        let user = null;

        if(action.req && action.req.data && action.req.data.topics){
            console.log(state);
           const { topics } = state[action.category];

           topicsArray = topics.concat(action.req.data.topics);
           user = action.req.data.user;
           count = action.req.data.count;

           //topicsArray = data.map(child => child.data);

           let _meobj = {} ;
           _.find(topicsArray,(item)=>{
                const { id } = item;
                if(!_meobj[id]){
                    result.push(item);
                }
                _meobj[id]=true;

           })
        }
        return Object.assign({}, state, {
            [action.category]: topics(state[action.category], {
              type: action.type,
              category: action.category,
              topics:  result,
              count:count,

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
