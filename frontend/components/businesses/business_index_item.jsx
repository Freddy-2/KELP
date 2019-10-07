import React from 'react';
import { Link, withRouter } from 'react-router-dom';




const BusinessIndexItem = (props) => {
    return <div className="business-index-box">
        <Link className="business-pic" to={`/businesses/${props.business.id}`}>PICTURE</Link>
        <Link className="business-title" to={`/businesses/${props.business.id}`}>{props.business.title}</Link>
        <p className="business-category">category</p>
        <p className="business-address">{props.business.address}</p>
        <p className="business-description">{props.business.description}</p>
    </div>
}

export default withRouter(BusinessIndexItem);