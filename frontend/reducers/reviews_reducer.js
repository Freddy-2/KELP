import {
  RECEIVE_REVIEWS,
  RECEIVE_REVIEW,
  REMOVE_REVIEW
} from "../actions/review_actions";
import {RECEIVE_BUSINESS} from "../actions/business_actions"
import merge from "lodash/merge";

const reviewsReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_REVIEWS:
      return action.reviews;
    case RECEIVE_REVIEW:
      return merge({}, state, { [action.review.id]: action.review });
    case RECEIVE_BUSINESS:
      return action.business.reviews || {};
    case REMOVE_REVIEW:
      newState = merge({}, state);
      delete newState[action.reviewId]
      return newState;
    default:
      return state;
  }
};

export default reviewsReducer;
