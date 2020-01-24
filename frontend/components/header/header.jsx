import React from 'react';
import { Link } from 'react-router-dom';



const Header = props => {
  const sessionLinks = () => (
    <nav className="login-signup-header">
      <div className="left-side-header">
      <Link to="/businesses" className="review-header">Write a Review</Link>
      <div className="header-links">
        <a href="https://github.com/Freddy-2" className="header-github-link">Projects</a>
        <a href="https://www.linkedin.com/in/alfredallegretti" className="header-linkedin-link">Chat</a>
      </div>
      </div>
      <div className="login-signup-buttons">
        <Link to="/login" className="login-header">Log In</Link> 
        <Link to="/signup" className="signup-header">Sign Up</Link>
      </div>
    </nav>
  );
  
  const profPic = () => {
    // debugger
    if(props.user.prof_pic === undefined){
      return <span className="header-pp"> <img className="header-pp2" src={window.krabbyPatty4Url} /></span>
    } else { return <span className="header-pp"> <img className="header-pp2" src={props.user.prof_pic} /></span> }
  }

  const personalGreeting = () => (
    <div className="logged-in-header">
      <div className="left-side-header">
        <Link to="/businesses" className="review-header">Write a Review</Link>
        <div className="header-links">
          <a href="https://github.com/Freddy-2" className="header-github-link">Projects</a>
          <a href="https://www.linkedin.com/in/alfredallegretti" className="header-linkedin-link">Chat</a>
        </div>
      </div>
      {/* <div className="right-side-loggout"> */}
      {profPic()}
      
      <button className="header-logout-button" onClick={props.logout}>Log Out</button>

      {/* </div> */}
      
    </div>
  );

  return props.user ? personalGreeting() : sessionLinks();
};


export default Header;