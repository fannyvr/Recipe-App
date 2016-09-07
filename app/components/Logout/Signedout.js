import React from 'react';
import ReactDOM from 'react-dom';
import hashHistory from 'react-router';

const Signedout = () => (
  <div>
    <ul>
      <li><a onClick= {()=> hashHistory.push('/signin')}> Sign In </a></li>
      <li><a onClick={()=> hashHistory.push('/signup')}> Sign Up </a></li>
    </ul>
  </div>
)

export default Signedout;