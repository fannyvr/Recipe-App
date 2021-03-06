import React from 'react';

const Search = ( props ) => (
  <div>
    <form>
      <br />
      Main Ingredient <br />
      <input type="text" onChange={ props.onChange('ingredient') } value={ props.enterIngredient } />
      <br /> <br />
      Type of Meal <br/>
      <select onChange={ props.onChange('meal') } value={ props.mealChoice }>
        <option value="breakfast"> Breakfast </option>
        <option value="lunch"> Lunch </option>
        <option value="dinner"> Dinner </option>
      </select>
      <br /> <br />
      Number of Recipes <br/>
      <select onChange={ props.onChange('number') } value={ props.numberOfRecipes }>
        <option value="1"> 1 </option>
        <option value="2"> 2 </option>
        <option value="3"> 3 </option>
        <option value="4"> 4 </option>
        <option value="5"> 5 </option>
        <option value="6"> 6 </option>
        <option value="7"> 7 </option>
        <option value="8"> 8 </option>
        <option value="9"> 9 </option>
        <option value="10"> 10 </option>
      </select>
    </form>
  </div>
)

export default Search;


