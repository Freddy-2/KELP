import { connect } from "react-redux";
import React from 'react';
import HomePage from './home_page'

const msp = (state) => {
  return ({
    user: state.entities.users[state.session.id]
  })
}

const mdp = dispatch => ({

})

export default connect(msp, mdp)(HomePage)