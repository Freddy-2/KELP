import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer';


class BusinessShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
       this.props.fetchBusiness(this.props.match.params.id);
    }

    render() {
        return (
            <>
                <header className="form-page-header">
                    <Link to="/" className="logo-link-form-page">
                        <img src={window.kelpLogoUrl} className="kelp-logo-form-page" />
                    </Link>
                </header>
            <div className="business-photos">{this.props.business.title} PHOTOS</div>
            <div className="show-page">
                
             <div className="show-left">
                <div className="title-area">
                    
                    <div className="business-title-show">{this.props.business.title}</div> 
                    <div className="business-rating-show" >RATING</div>
                    <div className="business-category-show">category</div>
                </div>

                <label className="label-map">Location & Hours</label>
                <div className="map-and-hours">
                    <div className="show-map">MAP</div>
                    <ul className="biz-hours">
                        <li>Mon {this.props.business.opening_hours} - {this.props.business.closing_hours}</li>
                        <li>Tue {this.props.business.opening_hours} - {this.props.business.closing_hours}</li>
                        <li>Wed {this.props.business.opening_hours} - {this.props.business.closing_hours}</li>
                        <li>Thu {this.props.business.opening_hours} - {this.props.business.closing_hours}</li>
                        <li>Fri {this.props.business.opening_hours} - {this.props.business.closing_hours}</li>
                        <li>Sat {this.props.business.opening_hours} - {this.props.business.closing_hours}</li>
                        <li>Sun {this.props.business.opening_hours} - {this.props.business.closing_hours}</li>
                    </ul>
                </div>
                <label className="label-description">About The Business</label>
                <div className="business-description-show">
               <div className="show-description"> {this.props.business.description}</div>
               </div>
                <div className="show-reviews">
                        <div className="each-review">REVIEW</div>
                </div>
             </div>
             <div className="show-right">
                <div className="show-addy">{this.props.business.address} </div>
                        <div className="show-addy">Bikini Bottom</div>
             </div>
            </div>
            <Footer />
            </>
        );
    }
}

export default BusinessShow;
