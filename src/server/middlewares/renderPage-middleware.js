import React from 'react';
import { RoutingContext, match } from 'react-router';
import { Provider } from 'react-redux';
import createLocation from 'history/lib/createLocation';
import { fetchComponentDataBeforeRender } from '../../common/api/fetchComponentDataBeforeRender';

import configureStore from '../../common/store/configureStore';


import routes from '../../common/routes';
import packagejson from '../../../package.json';

import serialize from 'serialize-javascript';
import { renderToString } from 'react-dom/server';

//渲染页面
const renderPage = (html, initialState) => {

    return `
        <!doctype html>
        <html>
            <head>
                <meta charset="utf-8" />
                <title>SKT</title>
                <link rel="stylesheet" href="/css/index.css" />

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

    const { url  } = req ;

    match({routes, location: url}, (error, redirectLocation, renderProps) => {

            if(error){

                return res.status(500).end('Internal server error');
            }else if (!renderProps) {
                return res.status(404).end('Not found');
            } else {
                const { session } = req ;
                let loginUser = (session && session.user) ? session.user : null;



                 const store = configureStore({
                        user:{
                            authenticated: loginUser ? true :false,
                            isWaiting: false,
                            ...loginUser
                        }
                 });

                fetchComponentDataBeforeRender(store.dispatch, renderProps.components, renderProps.params)
                  .then(html=>{
                         const InitialView = (
                            <Provider store={store} >
                               <RoutingContext {...renderProps} />
                            </Provider>
                 );
                    const componentHTML = renderToString(InitialView);
                    const initialState = store.getState();
                        res.status(200).send(renderPage(componentHTML,initialState))
                  }).catch(err =>{
                        console.log(err)
                        res.end(renderPage("",{}))
                  });
            }
        });



}

