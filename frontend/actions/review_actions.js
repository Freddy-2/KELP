import * as APIUtil from "../util/review_api_util";

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveReviews = reviews => {
  return {
    type: RECEIVE_REVIEWS,
    reviews
  };
};

export const receiveReview = review => {
  return {
    type: RECEIVE_REVIEW,
    review
  };
};

export const removeReview = reviewId => {
  return {
    type: REMOVE_REVIEW,
    reviewId
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const fetchReviews = () => dispatch => 
  APIUtil.fetchReviews().then(reviews =>
    dispatch(receiveReviews(reviews)), err => dispatch(receiveErrors(err.responseJSON)
  ));

export const fetchReview = id => dispatch =>
  APIUtil.fetchReview(id).then(review =>
    dispatch(receiveReview(review)), err => dispatch(receiveErrors(err.responseJSON))
  );

export const createReview = id => dispatch =>
  APIUtil.createReview(id).then(review =>
    dispatch(receiveReview(review)), err => dispatch(receiveErrors(err.responseJSON))
  );

export const editReview = id => dispatch =>
  APIUtil.editReview(id).then(review =>
    dispatch(receiveReview(review)), err => dispatch(receiveErrors(err.responseJSON))
  );

export const deleteReview = reviewId => dispatch =>
  APIUtil.deleteReview(reviewId).then(review =>
    dispatch(removeReview(reviewId)), err => dispatch(receiveErrors(err.responseJSON))
  );

