import React from 'react';
import ReactDOM from 'react-DOM';
import {hashHistory, IndexRoute} from 'react-router';
import '../styles/navBar.css';

const NavBar = () => (
  <div>
	  <ul>
		  <li><a onClick= {()=> hashHistory.push({IndexRoute})}> My Recipes </a> </li>
		  <li><a onClick= {()=> hashHistory.push('/searchrecipes')}> Search Recipes </a></li>
	  </ul>
  </div>
 )

export default NavBar; 