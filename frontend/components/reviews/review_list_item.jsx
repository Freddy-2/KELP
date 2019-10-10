import React from 'react';
import { Link, withRouter } from 'react-router-dom';




const ReviewListItem = (props) => {
  // debugger
  return <div className="review-index-box">
    <div>{props.review.rating}</div>
    <div>{props.review.body}</div>
    <div>{props.author.first_name}</div>

  </div>
}

export default withRouter(ReviewListItem);