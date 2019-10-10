
import { connect } from "react-redux";
import { createReview } from "../../actions/review_actions"
import ReviewForm from "./review_form";
import { fetchBusiness } from '../../actions/business_actions'
// import { Link } from 'react-router-dom';
import React from 'react';


const msp = (state, ownProps) => {
  return {
    // nav: <Link to="/signup">Sign Up</Link>,
    errors: state.errors.session,
    user: state.entities.users[state.session.id],
    business: state.entities.businesses[ownProps.match.params.id] ||
      {
        title: "",
        description: "",
        longitude: 0,
        latitude: 0,
        address: "",
        price: 0,
        opening_hours: "",
        closing_hours: "",
        photoUrls: [],
      }
  }
}

const mdp = dispatch => {
  return {
    processReview: (review) => dispatch(createReview(review)),
    fetchBusiness: (id) => dispatch(fetchBusiness(id)),
    // clearErrors: () => dispatch(clearErrors([])),
  };
};


export default connect(msp, mdp)(ReviewForm)