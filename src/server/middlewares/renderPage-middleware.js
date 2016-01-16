import React from 'react';
import { RoutingContext, match } from 'react-router';
import { Provider } from 'react-redux';
import createLocation from 'history/lib/createLocation';
import { fetchComponentDataBeforeRender } from '../../common/api/fetchComponentDataBeforeRender';

import configureStore from '../../common/store/configureStore';


import routes from '../../common/routes';
import packagejson from '../../../package.json';
import qs from 'query-string';
import serialize from 'serialize-javascript';
import { renderToString } from 'react-dom/server';

//渲染页面
const renderPage = (html, initialState,extraData) => {
    return `
          <!doctype html>
          <html>
              <head>
                  <meta charset="utf-8">
                  <title>SKT-Topic</title>

                  <link src="/css/index.css"/>
                  <script>
                        window.BSGlobeData={
                            extraData:${serialize(extraData)}
                        };
                  </script>
              </head>
              <body>
                    <div id="root">${html}</div>
                    <script>

                        window.__INITIAL_STATE__ = ${serialize(initialState)};
                    </script>

                    <script src="/scripts/jquery.js"></script>
                    <script src="/bundle.js"></script>
              </body>
          </html>
  `;
}

export default function reactServerMiddleware(req,res,next){

    const { url ,session } = req ;
    let extraData = {
        loginUser:(session &&session.user) || null
    };
    const location = createLocation(url);
    match({routes, location}, (error, redirectLocation, renderProps) => {

            if(error){
                console.error('ROUTER ERROR:', pretty.render(error));
                return res.status(500).end('Internal server error');
            }else if (!renderProps) {
                return res.status(404).end('Not found');
            } else {

                const store = configureStore();

                const InitialView = (
                    <Provider store={store} >
                        <RoutingContext {...renderProps} />
                    </Provider>
                );
                fetchComponentDataBeforeRender(store.dispatch, renderProps.components, renderProps.params)
                  .then(html=>{
                       const componentHTML = renderToString(InitialView);
                       const initialState = store.getState();
                       res.status(200).end(renderPage(componentHTML,initialState,extraData))
                  }).catch(err =>{
                        console.log(err)
                        res.end(renderPage("",{}))
                  });
            }
        });



}

