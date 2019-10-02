import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveUser = (user) => {
    return{
      type: RECEIVE_CURRENT_USER,
      user,
    }
}

export const logoutUser = (userId) => {
  return{
    type: LOGOUT_CURRENT_USER,
    userId,
  }
}
export const receiveErrors = (errors) => {
  return{
    type: RECEIVE_ERRORS,
    errors,
  }
}

export const signup = user => dispatch =>
  APIUtil.signup(user).then( user => dispatch(receiveUser(user)), err => dispatch(receiveErrors(err.responseJSON)));

export const login = user => dispatch =>
  APIUtil.login(user).then(user => dispatch(receiveUser(user)), err => dispatch(receiveErrors(err.responseJSON)));

export const logout = (userId) => dispatch =>
  APIUtil.logout(userId).then(user => dispatch(logoutUser(userId)));