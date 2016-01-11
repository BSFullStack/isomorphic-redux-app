import 'babel-core/polyfill';
import React                from 'react';
import { render }           from 'react-dom';
import { Router }           from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import configureStore from '../common/store/configureStore';
import routes from '../common/routes';
import makeRouteHooksSafe from '../common/api/makeRouteHooksSafe';
import immutifyState        from '../common/api/immutifyState';

const history = createBrowserHistory();
const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);

//引入样式
import "../../public/css/index.css";

//挂载点
const mountId = document.getElementById('root');
 /* BJ_REPORT.init({
                id: 1,
                url: "http://127.0.0.1/badjs"
        });

        BJ_REPORT.tryJs().spyAll();*/
//渲染
render(
    <Provider store={store} >
        <ReduxRouter>
            <Router children={routes} history={history} />
        </ReduxRouter>
    </Provider>,
    mountId
);
