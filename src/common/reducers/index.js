import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import undoable from 'redux-undo';
//引入reducers
import user from './user';
import layout from './layout';
import version from './version';
import publish from './publish';
import login from './login';
import register from './register';
import { selectedCategory, topicsByCategory } from './topic';
const rootReducer = combineReducers({
    user : user,
    version : version,
    layout : undoable(layout),
    login :login,
    register:register,
    publish:publish,
    selectedCategory : undoable(selectedCategory),
    topicsByCategory : undoable(topicsByCategory),
    router : routerStateReducer
});

export default rootReducer;
