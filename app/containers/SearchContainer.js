import React, {Component} from 'react';
import Search from '../components/search/Search';

const SearchContainer = React.createClass({
  
  getInitialState(){
    return {ingredient: " "}
  },
  
  handleChange(event){
    this.setState({ingredient: event.target.value})
  },
  
  render(){
    return(
      <div>
        <Search onKeyDown={this.handleChange} 
                enterIngredient={this.state.ingredient} />
      </div>
    )
  }
})

export default SearchContainer;
