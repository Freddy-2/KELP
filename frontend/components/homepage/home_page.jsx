import React from 'react';

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
          <form className="home-page-search" onSubmit={this.handleSubmit}>
          <label className="find-label"> Find
            <input className="find-search" type="text" placeholder="Krabby patties, Chum Bucket..." value={this.state.find} onChange={this.update("find")} />
          </label>
          <label className="near-label"> Near
            <input className="near-search" type="text" placeholder="Bikini Bottom" onChange={this.update("near")} />
          </label>
          <input type="submit" value="Search"/>
        </form>

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