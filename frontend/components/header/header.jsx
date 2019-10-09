import React from 'react';
import { Link } from 'react-router-dom';



const Header = props => {
  const sessionLinks = () => (
    <nav className="login-signup-header">
      <div className="left-side-header">
      <p className="review">Write a Review</p>
      <div className="header-links">
        <a href="https://github.com/Freddy-2/KELP" className="header-github-link">Projects</a>
        <a href="https://www.linkedin.com/in/alfredallegretti" className="header-linkedin-link">Chat</a>
      </div>
      </div>
      <div className="login-signup-buttons">
        <Link to="/login" className="login-header">Log In</Link> 
        <Link to="/signup" className="signup-header">Sign Up</Link>
      </div>
    </nav>
  );
  const personalGreeting = () => (
    <div className="logged-in-header">
      <div className="left-side-header">
        <p className="review">Write a Review</p>
        <div className="header-links">
          <a href="https://github.com/Freddy-2/KELP" className="header-github-link">Projects</a>
          <a href="https://www.linkedin.com/in/alfredallegretti" className="header-linkedin-link">Chat</a>
        </div>
      </div>
      <button className="header-logout-button" onClick={props.logout}>Log Out</button>
    </div>
  );

  return props.user ? personalGreeting() : sessionLinks();
};


export default Header;