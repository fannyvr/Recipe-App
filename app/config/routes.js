import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import AppContainer from '../containers/AppContainer';
import SearchRecipes from '../components/Search/SearchRecipes';
import MyRecipes from '../components/MyRecipes/MyRecipes';
import Signedout from '../components/Logout/Signedout';

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={AppContainer}>
      <IndexRoute component={MyRecipes}/>
      <Route path="/searchrecipes" component={SearchRecipes}/>
      <Route path="/signedout" component={Signedout}/>
    </Route>
  </Router>
)
export default routes;