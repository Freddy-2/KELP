import { connect } from "react-redux";
import React from 'react';
import HomePage from './home_page';
import { fetchUsers } from '../../actions/user_actions';
import { fetchBusinesses } from '../../actions/business_actions';

const msp = (state) => {
  return ({
    user: state.entities.users[state.session.id]
  })
}

const mdp = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
  fetchBusinesses: () => dispatch(fetchBusinesses()),
})

export default connect(msp, mdp)(HomePage)