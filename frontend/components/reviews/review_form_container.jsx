
import { connect } from "react-redux";
import { createReview } from "../../actions/review_actions"
import ReviewForm from "./review_form";
// import { Link } from 'react-router-dom';
import React from 'react';


const msp = (state) => {
  return {
    // nav: <Link to="/signup">Sign Up</Link>,
    errors: state.errors.session,
    user: state.entities.users[state.session.id],
  }
}

const mdp = dispatch => {
  return {
    processReview: (review) => dispatch(createReview(review)),
    // clearErrors: () => dispatch(clearErrors([])),
  };
};


export default connect(msp, mdp)(ReviewForm)