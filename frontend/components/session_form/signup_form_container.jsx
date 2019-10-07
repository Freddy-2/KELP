import { connect } from "react-redux";
import { signup, clearErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";
import { Link } from 'react-router-dom';
import React from 'react';

const msp = (state) => {
  return{
  nav: <Link to="/login">Log In</Link>,
  errors: state.errors.session,
  formType: "Sign Up"
  }
}

const mdp = dispatch => {
  return{
  processForm: user => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors([])),
  }
}

export default connect(msp, mdp)(SessionForm)