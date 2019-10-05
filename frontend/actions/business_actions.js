import * as APIUtil from '../util/business_api_util'

export const RECEIVE_BUSINESSES = 'RECEIVE_BUSINESSES';
export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';

export const receiveBusinesses = businesses => {
    return{
        type: RECEIVE_BUSINESSES,
        businesses,
    }
};

export const receiveBusiness = business => {
    return{
        type: RECEIVE_BUSINESS,
        business,
    }
};

export const fetchBusinesses = () => dispatch => (
    APIUtil.fetchBusinesses().then(businesses => (
        dispatch(receiveBusinesses(businesses))
    ))
);

export const fetchBusiness = id => dispatch => (
    APIUtil.fetchBusiness(id).then(business => (
        dispatch(receiveBusiness(business))
    ))
);