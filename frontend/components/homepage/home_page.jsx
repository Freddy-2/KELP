import React from 'react';
import HeaderContainer from '../header/header_container'
import Header from '../header/header';
import {Link} from 'react-router-dom';

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      find: "",
      near: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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
    return (
      <>
      <div className='home-page'>
        <div className='header-and-form'>
        <HeaderContainer />
          <Link to="/" className="logo-link">
              <img src={window.kelpLogoUrl} className="kelp-logo"/>
          </Link>
          <form className="home-page-search" onSubmit={this.handleSubmit}>
          <label className="find-label"> Find
            <input className="find-search" type="text" placeholder="Krabby patties, Chum Bucket..." value={this.state.find} onChange={this.update("find")} />
          </label>
          <label className="near-label"> Near
            <input className="near-search" type="text" placeholder="Bikini Bottom" onChange={this.update("near")} />
          </label>
          <input type="submit" value="Search"/>
        </form>
        </div>

        <div className="under-search">
            <label className="best-business">Find the Best Businessess in the Deep Blue Sea</label><br/>
            <img src={window.krustyKrabUrl} className="krusty-krab"/>
        </div>
      </div>
      </>
    )
  }
}
export default HomePage;