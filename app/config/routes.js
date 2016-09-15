import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import AppContainer from '../containers/AppContainer';
import SearchContainer from '../containers/SearchContainer';
import Recipes from '../components/recipes/Recipes';
import Login from '../components/login/Login';

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={AppContainer}>
      <IndexRoute component={Recipes}/>
      <Route path="/searchrecipes" component={SearchContainer}/>
      <Route path="/signedout" component={Login}/>
    </Route>
  </Router>
)
export default routes;