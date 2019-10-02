import { connect } from "react-redux";
import { signup, login } from "../../actions/session_actions";
import SessionForm from "./session_form";
import { Link } from 'react-router-dom';
import React from 'react';

const msp = (state) => {
  return{
  nav: <Link to="/signup">Sign up</Link>,
  errors: state.errors.session,
  formType: "signup"
  }
}

const mdp = dispatch => {
  return{
  processForm: user => dispatch(signup(user)),
  }
}

export default connect(msp, mdp)(SessionForm)