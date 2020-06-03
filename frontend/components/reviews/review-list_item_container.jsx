import React from 'react';
import { deleteReview } from '../../actions/review_actions';
import { fetchUsers } from '../../actions/user_actions';
import ReviewListItem from './review_list_item';
import { connect } from 'react-redux';
import { editReview } from '../../actions/review_actions'

const msp = (state) => {
  return ({
    users: Object.values(state.entities.users),
  })
}

const mdp = (dispatch) => {
  return ({
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
    fetchUsers: () => dispatch(fetchUsers()),
    // editReview: (reviewId) => dispatch(deleteReview(reviewId))
  })
}


export default connect(msp, mdp)(ReviewListItem);