import React from 'react';
import { Link, withRouter } from 'react-router-dom';




const BusinessIndexItem = (props) => {
    return <div className="business">
        <Link to={`/businesses/${props.business.id}`}>PICTURE</Link>
        <Link to={`/businesses/${props.business.id}`}>{props.business.title}</Link>
        <p>category</p>
        <p>{props.business.address}</p>
        <p>{props.business.description}</p>
    </div>
}

export default withRouter(BusinessIndexItem);