import React from 'react';
import HeaderContainer from '../header/header_container'
import Footer from '../footer/footer';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
// import 'font-awesome/css/font-awesome.min.css'

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      find: "",
      near: "",
      user: {email:"", prof_pic: null}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentDidMount() {
    // debugger
    //    debugger
    this.props.fetchUsers();
    this.props.fetchBusinesses();
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }


  render() {
    // debugger
    return (
      <>
      <div className='home-page'>
        <div className='header-and-form'>
        <HeaderContainer />
        <div className="logo-and-form">
            <Link to="/" className="logo-link">
              <img src={window.kelpLogoUrl} className="kelp-logo"/>
            </Link>
        <div className="search-and-button">
            <form className="home-page-search" onSubmit={this.handleSubmit}>
                  <div className="find-input-box">
            <label className="find-label"> Find
              <input className="find-search" type="text" placeholder="Krabby patties, Chum Bucket..." value={this.state.find} onChange={this.update("find")} />
            </label>
                    </div>
            <div className="near-input-box">
            <label className="near-label"> Near
              <input className="near-search" type="text" placeholder="Bikini Bottom" disabled onChange={this.update("near")} />
            </label>
            </div>
                  <div className="search-button3"> <Link to="/businesses" className="search-button"><FontAwesomeIcon icon={faSearch} className="fa-search" /></Link></div>
          </form>

        </div>                
        <div className="home-page-links">
                  <a href="https://www.linkedin.com/in/alfredallegretti" className="home-linkedin-link"><span className="linkedin-logo"><FontAwesomeIcon icon={faLinkedin} /></span> LinkedIn</a>
                  <a href="https://github.com/Freddy-2/KELP" className="home-github-link"><span className="github-logo"><FontAwesomeIcon icon={faGithub} /></span>Github</a>
        </div>
              <div className="logo-credit">Created my free logo at<a href="https://my.logomakr.com" className="home-logomaker-link">LogoMakr.com</a></div>
            </div>
        </div>

        <div className="under-search">
            <label className="best-business">Find the Best Businesses in the Deep Blue Sea</label><br/>
            <div className="krusty-krab-div">
         <Link to='/businesses/4'><img src={window.krustyKrabUrl} className="krusty-krab"/></Link> 
              {/* <img src={window.krabbyPattyUrl} className="patty-krab"d/> */}
            <p className="krusty-krab-name">The Krusty Krab!</p>
            </div>
        </div>
          <Footer />
      </div>
      </>
    )
  }
}
export default HomePage;