import { connect } from 'react-redux';
import BusinessIndex from './business_index';
import { fetchBusinesses } from '../../actions/business_actions'


const msp = (state, ownProps) => {
    // debugger
    return{
    businesses: Object.values(state.entities.businesses),
    find: ownProps.match.params.query || "",
    }
}

const mdp = dispatch => {
    return{
    fetchBusinesses: () => dispatch(fetchBusinesses())
    }
}

export default connect(msp, mdp)(BusinessIndex)