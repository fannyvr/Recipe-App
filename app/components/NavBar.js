import React, {Component} from 'react';
import ReactDOM from 'react-DOM';
import {hashHistory} from 'react-router';

class NavBar extends Component{
  render (){
    return(
      <div>
        <ul>
          <a onClick= {()=> hashHistory.push('/myrecipes')}> My Recipes </a>
          <a onClick= {()=> hashHistory.push('/searchrecipes')}> Search Recipes </a>
        </ul>
      </div>
    )
  }
}

export default NavBar; 