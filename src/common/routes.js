import React from 'react';
import { Route , IndexRoute} from "react-router";
import App from "./containers/App";

import HomePage from "./components/Home";
import TopicPage from "./containers/TopicPage";


export default (
  <Route name="app" component={App} path="/">
        <Route path="home" component={HomePage} />
        <Route path="topics" component={TopicPage} />
  </Route>
);
