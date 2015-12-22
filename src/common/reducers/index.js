import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import undoable from 'redux-undo';
//引入reducers
import user from './user';
import layout from './layout';
import version from './version';
import book from './book';
import register from './register'
const rootReducer = combineReducers({
    user : user,
    version : version,
    layout : undoable(layout),
    register :register,
    book:book,
    router : routerStateReducer
});

export default rootReducer;
