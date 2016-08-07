import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import AppContainer from '../containers/AppContainer';
import SearchRecipes from '../components/SearchRecipes';
import MyRecipes from '../components/MyRecipes';

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={AppContainer}>
      <IndexRoute component={MyRecipes}/>
      <Route path="/searchrecipes" component={SearchRecipes}/>
    </Route>
  </Router>
)

export default routes;