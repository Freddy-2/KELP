import React from 'react';
import { Link } from 'react-router-dom';


class BusinessShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
       this.props.fetchBusiness(this.props.match.params.id);
    }

    render() {
        return (
            <div>
                {this.props.business.title}
            </div>
        );
    }
}

export default BusinessShow;
