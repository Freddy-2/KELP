import { connect } from 'react-redux';
import BusinessShow from './business_show';
import { fetchBusiness } from '../../actions/business_actions'
import { fetchUsers } from '../../actions/user_actions'


const msp = (state, ownProps) => {

    // debugger
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
        photoUrls: [],
        },
        reviews: Object.values(state.entities.reviews),
        users: state.entities.users || {}
    }
    
}

const mdp = dispatch => {
    return{
    fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
    fetchUsers: () => dispatch(fetchUsers()),
    }
}

export default connect(msp, mdp)(BusinessShow);