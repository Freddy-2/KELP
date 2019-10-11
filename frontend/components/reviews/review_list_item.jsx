import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'



const ReviewListItem = (props) => {
  // debugger
  return <div className="review-index-box2">
    <div className="review-list-item-leftest-side" >
      <img src={window.placeholderUrl} className="placeholder-prof-pic" />
    </div>
    <div className="review-list-item-left-side">
      <div className="review-name-list">{props.author.first_name} {props.author.last_name[0]}.</div>
      <div className="review-location-list">Bikini Bottom</div>
      <div className="amount-reviews-list">  <FontAwesomeIcon icon={faStar} className="starcon-list" /><span>25</span> reviews </div>
    </div>
    <div className="review-list-item-right-side">
      <div className="review-rating-list">{props.review.rating}</div>
      <div className="review-body-list">{props.review.body}</div>
    </div>
  </div>
}

export default withRouter(ReviewListItem);