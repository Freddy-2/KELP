import React from 'react';
import { Link } from 'react-router-dom';
import header from "../header/header";
import BusinessIndexItem from "./business_index_item";
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
                <div className="businesses-box">
                    <h1 className="business-label"> Best Businesses near Bikini Bottom </h1>
                    {this.props.businesses.map(business => (
                        <BusinessIndexItem
                            business={business}
                            key={business.id}
                        />
                    ))}
                </div>
            </>
        )
    }
}
export default BusinessIndex