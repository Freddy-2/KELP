import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer';
import ReviewListItem from '../reviews/review_list_item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faDirections, faSearch } from '@fortawesome/free-solid-svg-icons'


class BusinessShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            find: "",
            near: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        // debugger
        this.props.fetchUsers().then( ()=> this.props.fetchBusiness(this.props.match.params.id));
       
    //    debugger
    //    this.props.fetchUsers();
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
    }

 


    render() {
        // debugger
        // let revIds = this.props.reviews.map(review => {
        //     return review.user_id;
        // });
        // debugger
        return (
            <>
                <header className="form-page-header">
                    <div className="index-header">
                        <Link to="/" className="logo-link-biz-page">
                            <img src={window.kelpLogoUrl} className="kelp-logo-biz-page" />
                        </Link>

                        <div className="search-and-button2">
                            <form className="home-page-search2" onSubmit={this.handleSubmit}>
                                <div className="find-input-box2">
                                    <label className="find-label2"> Find
              <input className="find-search2" type="text" placeholder="Krabby patties, Chum Bucket..." value={this.state.find} onChange={this.update("find")} />
                                    </label>
                                </div>
                                <div className="near-input-box2">
                                    <label className="near-label2"> Near
              <input className="near-search2" type="text" placeholder="Bikini Bottom" onChange={this.update("near")} />
                                    </label>
                                </div>
                                <div className="search-button4"> <Link to="/businesses" className="search-button6"><FontAwesomeIcon icon={faSearch} className="fa-search2" /></Link></div>
                            </form>

                        </div>
                    </div>
                </header>
                <div className="show-page-pics">
                <img className="show-page-pic" src={this.props.business.photoUrls[0]} />
                <img className="show-page-pic" src={this.props.business.photoUrls[1]} />
                <img className="show-page-pic" src={this.props.business.photoUrls[2]} />
                <img className="show-page-pic" src={this.props.business.photoUrls[3]} />
                </div>
            <div className="show-page">
                
             <div className="show-left">
                <div className="title-area">
                    
                    <div className="business-title-show">{this.props.business.title}</div> 
                            <div className="business-rating-show" > <FontAwesomeIcon icon={faStar} className="starcon-list2" /> <FontAwesomeIcon icon={faStar} className="starcon-list2" /> <FontAwesomeIcon icon={faStar} className="starcon-list2" /> <FontAwesomeIcon icon={faStar} className="starcon-list2" /> <FontAwesomeIcon icon={faStar} className="starcon-list2" /><span>{this.props.reviews.length} reviews</span></div>
                    
                    <div className="business-category-show"> <span>$$</span> <span className="dot"></span> Great Stuff, Oh Barnacles</div>
                            <div className="business-rev-link-show">  <Link to={`/businesses/${this.props.business.id}/reviews`} className="review-show-write-button"><span><FontAwesomeIcon icon={faStar}/>Write a Review</span> </Link></div>
                </div>

                <h2 className="h2-map">Location & Hours</h2>
                <div className="map-and-hours">
                    <div className="show-map"><img className="show-map-2" src={this.props.business.photoUrls[0]} /></div>
                    <ul className="biz-hours">
                        <div className="biz-hours3">

                        <div className="get-bizzy">
                            <li>Mon </li>
                            <span className="biz-hours2">{this.props.business.opening_hours} - {this.props.business.closing_hours}</span>
                        </div>

                        <div className="get-bizzy">
                        <li>Tue </li>
                        <span className="biz-hours2">{this.props.business.opening_hours} - {this.props.business.closing_hours}</span>
                        </div>

                        <div className="get-bizzy">
                            <li>Wed </li>
                            <span className="biz-hours2">{this.props.business.opening_hours} - {this.props.business.closing_hours}</span>
                        </div>

                        <div className="get-bizzy">
                            <li>Thu </li>
                            <span className="biz-hours2">{this.props.business.opening_hours} - {this.props.business.closing_hours}</span>
                        </div>
                        
                        <div className="get-bizzy">
                            <li>Fri </li>
                            <span className="biz-hours2">{this.props.business.opening_hours} - {this.props.business.closing_hours}</span>
                        </div>
                        
                        <div className="get-bizzy">
                            <li>Sat </li>
                            <span className="biz-hours2">{this.props.business.opening_hours} - {this.props.business.closing_hours}</span>
                        </div>
                        
                        <div className="get-bizzy">
                            <li>Sun </li>
                            <span className="biz-hours2">{this.props.business.opening_hours} - {this.props.business.closing_hours}</span>
                        </div>
                        
                        </div>
                    </ul>
                </div>
                <h2 className="h2-description">About The Business</h2>
                <div className="business-description-show">
               <div className="show-description"> {this.props.business.description}</div>
               </div>
                <div className="show-reviews">
                            {this.props.reviews.map(review => {
       
                              return  <ReviewListItem
                                    review={review}
                                    key={review.id}
                                    author={this.props.users[review.user_id]}
                            />})}        
                </div>
             </div>
             <div className="show-right">
                 <div className='addresses-show'>
                <FontAwesomeIcon icon={faDirections} className="directocon" />
                     <div className="show-right-right-side">
                     <h2 className='gettem-directos'>Get Directions</h2>
                <div className="show-addy">{this.props.business.address} </div>
                        <div className="show-addy">Bikini Bottom</div>
                    </div>
                </div>
             </div>
            </div>
            <Footer />
            </>
        );
    }
}

export default BusinessShow;
