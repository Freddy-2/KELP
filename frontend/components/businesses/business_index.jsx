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
                <div>
                    <h1>Businesses: </h1>
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