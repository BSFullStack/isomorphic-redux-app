import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import undoable from 'redux-undo';
import user from './user';
import layout from './layout';

import publish from './publish';
import { login , register } from './login';
import { selectedCategory, topicsByCategory } from './topic';
import topicDetail from './topicDetail';


const rootReducer = combineReducers({
    layout : undoable(layout),
    user:user,
    login :login,
    register:register,
    publish:publish,
    selectedCategory : undoable(selectedCategory),
    topicsByCategory : undoable(topicsByCategory),
    topicDetail:topicDetail,
    router : routerStateReducer
});

export default rootReducer;
