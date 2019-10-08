import {
  RECEIVE_ERRORS,
  RECEIVE_REVIEW
} from "../actions/review_actions";

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_REVIEW:
      return [];
    case RECEIVE_ERRORS:
      return action.errors;
    default:
      return state;
  }
};
