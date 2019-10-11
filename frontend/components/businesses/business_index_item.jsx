import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';




const BusinessIndexItem = (props) => {
    // debugger
    return <div className="business-index-box">
        
        <Link className="business-pic" to={`/businesses/${props.business.id}`}><img className="placeholder-pic" src={props.business.photoUrls[0]} /></Link>
        <div className="box2">
            <Link className="business-title" to={`/businesses/${props.business.id}`}>{props.business.title}</Link>
            <p className="business-rating" ><FontAwesomeIcon icon={faStar} className="starcon-list2" /><FontAwesomeIcon icon={faStar} className="starcon-list2" /><FontAwesomeIcon icon={faStar} className="starcon-list2" /></p>
            <p className="business-category">Great Stuff, Oh Barnacles</p>
            <p className="business-description">{props.business.description}</p>
        </div>
        <div className="addy-div">
            <p className="business-address">{props.business.address}</p>
            <p className="business-address">Bikini Bottom</p>
        </div>
    </div>
}

export default withRouter(BusinessIndexItem);