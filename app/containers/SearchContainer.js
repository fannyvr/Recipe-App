import React, {Component} from 'react';
import Search from '../components/search/Search';

const SearchContainer = React.createClass({
  
  getInitialState(){
    return {ingredient: ' ', meal: 'Breakfast', number: 1}
  },
  
  handleIngredientChange(event){
    this.setState({ingredient: event.target.value})
  },

  handleMealChange(event){
    this.setState({meal: event.target.value})
  },

  handleMealNumberChange(event){
    this.setState({number: event.target.value})
  },

  render(){
    return(
      <div>
        <Search onIngredientChange={this.handleIngredientChange} 
                enterIngredient={this.state.ingredient} 
                onMealChange={this.handleMealChange}
                mealChoice={this.state.meal}
                onMealNumberChange={this.handleMealNumberChange}
                mealNumberChoice={this.state.number} />
      </div>
    )
  }
})

export default SearchContainer;
