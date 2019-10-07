import React from 'react';
import { Link } from 'react-router-dom';
import header from "../header/header";
import BusinessIndexItem from "./business_index_item";
import Footer from '../footer/footer';
class BusinessIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchBusinesses()
    }

    render() {
        return (
            <>
                <header className="form-page-header">
                    <Link to="/" className="logo-link-form-page">
                        <img src={window.kelpLogoUrl} className="kelp-logo-form-page" />
                    </Link>

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