import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'



const ReviewListItem = (props) => {
  // debugger

  const profPic = () => {
    debugger
    if (props.author.prof_pic === undefined) {
      return  <img className="placeholder-prof-pic" src={window.krabbyPatty4Url} />
    } else { return <img className="placeholder-prof-pic" src={props.author.prof_pic} /> }
  }

  // const revIds = () => {
  //   if (props.author.reviewIds.length === undefined) {
  //     return <div className="amount-reviews-list">  <FontAwesomeIcon icon={faStar} className="starcon-list" /><span>24</span> reviews </div> 
  //   } else { return <div className="amount-reviews-list">  <FontAwesomeIcon icon={faStar} className="starcon-list" /><span>{props.author.reviewIds.length}</span> reviews </div> }
  // }
    //  {revIds()}

  return <div className="review-index-box2">
    <div className="review-list-item-leftest-side" >
    {profPic()}
    </div>
    <div className="review-list-item-left-side">
      <div className="review-name-list">{props.author.first_name} {props.author.last_name[0]}.</div>
      <div className="review-location-list">Bikini Bottom</div>
      <div className="amount-reviews-list">  <FontAwesomeIcon icon={faStar} className="starcon-list" /><span>{props.author.reviewIds}</span> reviews </div>
    </div>
    <div className="review-list-item-right-side">
      <div className="review-rating-list">{props.review.rating}</div>
      <div className="review-body-list">{props.review.body}</div>
    </div>
  </div>
}

export default withRouter(ReviewListItem);