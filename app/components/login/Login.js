import React from 'react';
import hashHistory from 'react-router';

const Login = () => (
  <div>
    <ul className="nav">
      <li className="navButton"><a onClick= {()=> hashHistory.push('/signin')}> Sign In </a></li>
      <li className="navButton"><a onClick={()=> hashHistory.push('/signup')}> Sign Up </a></li>
    </ul>
  </div>
)

export default Login;