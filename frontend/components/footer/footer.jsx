import React from 'react';
import { Link } from 'react-router-dom';



const Footer = () => {
  const everyPage = () => (
    <nav className="page-bottom">
      <div className="links">
        <a href="https://www.linkedin.com/in/alfredallegretti" className="linkedin-link">Contact Me</a>
        <a href="https://github.com/Freddy-2/KELP" className="github-link">Check out my projects</a>
        
      </div>
      <img className="footer-img" src={window.footerIMGUrl} />
    </nav>
  );

  return everyPage();
};


export default Footer;