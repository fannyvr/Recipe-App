import React, {Component} from 'react';
import Search from '../components/search/Search';

const SearchContainer = React.createClass({
  
  getInitialState(){
    return {ingredient: ' ', meal: 'Breakfast'}
  },
  
  handleIngredientChange(event){
    this.setState({ingredient: event.target.value})
  },

  handleMealChange(event){
    this.setState({meal: event.target.value})
    console.log("STATE", this.state)
  },

  render(){
    return(
      <div>
        <Search onIngredientChange={this.handleIngredientChange} 
                enterIngredient={this.state.ingredient} 
                onMealChange={this.handleMealChange}
                mealChoice={this.state.meal} />
      </div>
    )
  }
})

export default SearchContainer;
