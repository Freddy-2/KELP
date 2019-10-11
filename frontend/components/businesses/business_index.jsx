import React from 'react';
import { Link } from 'react-router-dom';
import header from "../header/header";
import BusinessIndexItem from "./business_index_item";
import Footer from '../footer/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
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
                
                    <div className="search-and-button2">
                        <form className="home-page-search2" onSubmit={this.handleSubmit}>
                            <div className="find-input-box2">
                                <label className="find-label2"> Find
              <input className="find-search2" type="text" placeholder="Krabby patties, Chum Bucket..." value={this.state.find} onChange={this.update("find")} />
                                </label>
                            </div>
                            <div className="near-input-box2">
                                <label className="near-label2"> Near
              <input className="near-search2" type="text" placeholder="Bikini Bottom" onChange={this.update("near")} />
                                </label>
                            </div>
                            <div className="search-button4"> <Link to="/businesses" className="search-button6"><FontAwesomeIcon icon={faSearch} className="fa-search2" /></Link></div>
                        </form>

                    </div>  
                    </div>
                </header>
                
                <div className="biggest-biz-box">
                
                <h1 className="business-label"> Best Businesses near Bikini Bottom </h1>
                    <div className="bigger-biz-box">
                        
                        <div className="businesses-box">
                            <h2 className="all-results"> All Results</h2>
                            {this.props.businesses.map(business => (
                                <BusinessIndexItem 
                                    business={business}
                                    key={business.id}
                                />
                            ))}
                        </div>
                        <div className="business-map">
                            <img src={window.krabbyPatty4Url} className="place-map" />
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}
export default BusinessIndex