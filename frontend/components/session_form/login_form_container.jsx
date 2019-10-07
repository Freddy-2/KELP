import { connect } from "react-redux";
import { login, clearErrors } from "../../actions/session_actions"
import SessionForm from "./session_form";
import { Link } from 'react-router-dom';
import React from 'react';


const msp = (state) => {
  return{
  nav: <Link to="/signup">Sign Up</Link>,
  errors: state.errors.session,
  formType: "Login"
  }
}

const mdp = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors([])),
  };
};


export default connect(msp, mdp)(SessionForm)