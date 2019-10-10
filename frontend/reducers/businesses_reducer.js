import { RECEIVE_BUSINESSES, RECEIVE_BUSINESS} from '../actions/business_actions'
import merge from "lodash/merge";


const businessesReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_BUSINESSES:
            return action.businesses;
        case RECEIVE_BUSINESS:
            // debugger
            return merge({}, state, {[action.business.business.id]: action.business.business});
        default:
            return state;
    }
};

export default businessesReducer;