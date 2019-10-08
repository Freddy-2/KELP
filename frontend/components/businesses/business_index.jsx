import React from 'react';
import { Link } from 'react-router-dom';
import header from "../header/header";
import BusinessIndexItem from "./business_index_item";
import Footer from '../footer/footer';
class BusinessIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            find: "",
            near: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
    }


    componentDidMount() {
        this.props.fetchBusinesses()
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        });
    }

    render() {
        return (
            <>
                <header className="form-page-header">
                    <div className="index-header">
                    <Link to="/" className="logo-link-biz-page">
                        <img src={window.kelpLogoUrl} className="kelp-logo-biz-page" />
                    </Link>
                    <form className="biz-search" onSubmit={this.handleSubmit}>
                        <label className="biz-find-label"> Find
              <input className="biz-find-search" type="text" placeholder="Krabby patties, Chum Bucket..." value={this.state.find} onChange={this.update("find")} />
                        </label>
                        <label className="biz-near-label"> Near
              <input className="biz-near-search" type="text" placeholder="Bikini Bottom" onChange={this.update("near")} />
                        </label>
                        <Link to="/businesses" className="biz-search-button"><img className="biz-search" src={window.searchUrl} /></Link>
                    </form>
                </div>
                </header>
                
                <div className="biggest-biz-box">
                
                <h1 className="business-label"> Best Businesses near Bikini Bottom </h1>
                    <div className="bigger-biz-box">
                        
                        <div className="businesses-box">
                            <h2 className="all-results"> All Results:</h2>
                            {this.props.businesses.map(business => (
                                <BusinessIndexItem 
                                    business={business}
                                    key={business.id}
                                />
                            ))}
                        </div>
                        <div className="business-map">
                            MAP
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}
export default BusinessIndex