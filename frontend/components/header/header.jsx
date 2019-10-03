import React from 'react';
import { Link } from 'react-router-dom';



const Header = props => {
  const sessionLinks = () => (
    <nav className="login-signup-header">
      <button className="login-header"><Link to="/login"> Login</Link></button> 
      
      <button className="signup-header"> <Link to="/signup" >Sign up</Link></button> 
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