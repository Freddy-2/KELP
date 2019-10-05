import { RECEIVE_BUSINESSES, RECEIVE_BUSINESS} from '../actions/business_actions'
import merge from "lodash/merge";


const businessesReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_BUSINESSES:
            return action.businesses;
        case RECEIVE_BUSINESS:
            return merge({}, state, {[action.business.id]: action.business});
        default:
            return state;
    }
};

export default businessesReducer;