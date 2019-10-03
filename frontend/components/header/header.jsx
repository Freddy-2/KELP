import React from 'react';
import { Link } from 'react-router-dom';



const Header = props => {
  const sessionLinks = () => (
    <nav className="login-signup-header">
      <div>
        <button>Write A Review</button>
      </div>
      <div className="login-signup-buttons">
        <a href="#/login" className="login-header">Login</a> 
        <button > <Link to="/signup" className="signup-header" >Sign up</Link></button> 
      </div>
    </nav>
  );
  const personalGreeting = () => (
    <div className="logged-in-header">
      <h2 className="header-name">Hi, {props.user.email}!</h2>
      <button className="header-logout-button" onClick={props.logout}>Log Out</button>
    </div>
  );

  return props.user ? personalGreeting() : sessionLinks();
};


export default Header;