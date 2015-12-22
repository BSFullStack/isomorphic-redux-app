import React from 'react';
import { Route , IndexRoute} from "react-router";
import App from "./containers/App";

import HomePage from "./components/Home";

//import RegisterPage from "./containers/RegisterPage";
import BookPage from "./containers/BookPage";

export default (
  <Route name="app" component={App} path="/">
        <IndexRoute component={HomePage}/>
        <Route path="home" component={HomePage}/>
        <Route path="book" component={BookPage}/>

  </Route>
);
