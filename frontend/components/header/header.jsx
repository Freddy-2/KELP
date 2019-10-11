import React from 'react';
import { Link } from 'react-router-dom';



const Header = props => {
  const sessionLinks = () => (
    <nav className="login-signup-header">
      <div className="left-side-header">
      <Link to="/businesses" className="review-header">Write a Review</Link>
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
        <Link to="/businesses" className="review-header">Write a Review</Link>
        <div className="header-links">
          <a href="https://github.com/Freddy-2/KELP" className="header-github-link">Projects</a>
          <a href="https://www.linkedin.com/in/alfredallegretti" className="header-linkedin-link">Chat</a>
        </div>
      </div>
      {/* <div className="right-side-loggout"> */}
      <span className="header-pp"> <img className="header-pp2" src={props.user.prof_pic} /></span>
      <button className="header-logout-button" onClick={props.logout}>Log Out</button>
      {/* </div> */}
      
    </div>
  );

  return props.user ? personalGreeting() : sessionLinks();
};


export default Header;