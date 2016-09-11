import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Nav from '../components/nav/Nav';

class AppContainer extends Component{
  render (){
    var logedIn;

    if(this.props.location.pathname === '/signedout'){
      logedIn = null;
    }else{
      logedIn = <Nav />;
    }
    
    return(
      <div>
        {logedIn}
        {this.props.children}
      </div>
    )
  }
}

export default AppContainer;