import React from 'react';
import { Link } from 'react-router-dom';



const Header = props => {
  const sessionLinks = () => (
    <nav className="login-signup-header">
      <div>
        <button>Write A Review</button>
      </div>
      <div className="login-signup-buttons">
        <Link to="/login" className="login-header">Login</Link> 
        <Link to="/signup" className="signup-header">Sign up</Link>
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