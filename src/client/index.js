import 'babel-core/polyfill';
import React                from 'react';
import { render }           from 'react-dom';
import { Router }           from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import configureStore from '../common/store/configureStore';
import routes from '../common/routes';
/*import immutifyState        from '../common/helpers/immutifyState';*/

const history = createBrowserHistory();
const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);

//引入样式
import "../../sass/all.scss";

//挂载点
const mountId = document.getElementById('root');
//渲染
render(
    <Provider store={store} >
        <ReduxRouter>
            <Router children={routes} history={history} />
        </ReduxRouter>
    </Provider>,
    document.getElementById('root')
);
