import React from 'react';
import { Route , IndexRoute} from "react-router";
import App from "./containers/App";


import NotFound from "./components/404";
import TopicPage from "./containers/TopicPage";
import PublishPage from './containers/PublishPage';
import LoginPage from './containers/LoginPage';
import TopicDetailPage from './containers/TopicDetailPage';
export default (
  <Route name="app" component={App} path="/">
        <Route path="home" component={TopicPage} />
        <Route path="topics" component={TopicPage} />
        <Route path="topics/:category" component={TopicPage} />
        <Route path="ask" component={PublishPage} />
        <Route path="login" component={LoginPage} />
        <Route path="/t/:topicId" component={TopicDetailPage} />
        <Route path="*" component={NotFound} />
  </Route>
);
