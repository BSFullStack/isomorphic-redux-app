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
import moment from 'moment';
const history = createBrowserHistory();
const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);




moment.locale('en', {
    relativeTime : {
        future: "在 %s",
        past:   "%s",
        s:  "刚刚",
        m:  "1分钟前",
        mm: "%d分钟前",
        h:  "1小时前",
        hh: "%d小时前",
        d:  "1天前",
        dd: "%d天前",
        M:  "1个月前",
        MM: "%d个月前",
        y:  "1年前",
        yy: "%d年前"
    }
});
moment.locale('zh-cn', {
    relativeTime : {
        future: "在%s",
        past:   "%s",
        s:  "刚刚",
        m:  "1分钟前",
        mm: "%d分钟前",
        h:  "1小时前",
        hh: "%d小时前",
        d:  "1天前",
        dd: "%d天前",
        M:  "1个月前",
        MM: "%d个月前",
        y:  "1年前",
        yy: "%d年前"
    }
});
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
