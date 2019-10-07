import { connect } from 'react-redux';
import BusinessShow from './business_show';
import { fetchBusiness } from '../../actions/business_actions'


const msp = (state, ownProps) => {
    return {
        business: state.entities.businesses[ownProps.match.params.id] || 
        {title: "",
        description: "",
        longitude: 0,
        latitude: 0,
        address: "",
        price: 0,
        opening_hours: "",
        closing_hours: "",
        }
    }
}

const mdp = dispatch => {
    return{
    fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId))
    }
}

export default connect(msp, mdp)(BusinessShow);