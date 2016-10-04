import React, { Component } from 'react';
import Search from '../components/search/Search';

const SearchContainer = React.createClass({
  
  getInitialState(){
    return { ingredient: ' ', meal: 'Breakfast', number: 1 }
  },
  
  handleChange( keyword ){
    return ( event ) => {
      const state = {};
      state[keyword] = event.target.value;
      this.setState( state );
    }
  },

  render(){
    return(
      <div>
        <Search onChange={ this.handleChange } 
                enterIngredient={ this.state.ingredient } 
                mealChoice={ this.state.meal }
                numberOfRecipes={ this.state.number } />
      </div>
    )
  }
})

export default SearchContainer;
