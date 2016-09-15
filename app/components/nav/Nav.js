import React from 'react';
import {hashHistory, IndexRoute} from 'react-router';
import './nav.css';

const Nav = () => (
  <div>
    <ul className="nav">
      <li className="navButton"><a onClick= {()=> hashHistory.push({IndexRoute})}> My Recipes </a> </li>
      <li className="navButton"><a onClick= {()=> hashHistory.push('/searchrecipes')}> Search Recipes </a></li>
      <li className="navButton"><a onClick= {()=> hashHistory.push('/signedout')}> Sign Out </a></li>
    </ul>
  </div>
 )

export default Nav; 

