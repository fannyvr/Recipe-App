import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../components/NavBar/NavBar';

class AppContainer extends Component{
  render (){
    return(
      <div>
        <NavBar />
        {this.props.children}
      </div>
    )
  }
}

export default AppContainer;