import { combineReducers } from 'redux';
import { routeReducer as routing } from 'redux-simple-router';
import undoable from 'redux-undo';
import user from './user';
import layout from './layout';

import publish from './publish';

import { selectedCategory, topicsByCategory } from './topic';
import topicDetail from './topicDetail';


const rootReducer = combineReducers({
    layout : undoable(layout),
    user:user,
    publish:publish,
    selectedCategory : undoable(selectedCategory),
    topicsByCategory : undoable(topicsByCategory),
    topicDetail:topicDetail,
    routing
});

export default rootReducer;
