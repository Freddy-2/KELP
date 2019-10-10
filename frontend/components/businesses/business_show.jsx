import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer';
import ReviewListItem from '../reviews/review_list_item';


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
       this.props.fetchBusiness(this.props.match.params.id);
    //    debugger
       this.props.fetchUsers();
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
                        <form className="biz-search" onSubmit={this.handleSubmit}>
                            <label className="biz-find-label"> Find
              <input className="biz-find-search" type="text" placeholder="Krabby patties, Chum Bucket..." value={this.state.find} onChange={this.update("find")} />
                            </label>
                            <label className="biz-near-label"> Near
              <input className="biz-near-search" type="text" placeholder="Bikini Bottom" onChange={this.update("near")} />
                            </label>
                            <Link to="/businesses" className="biz-search-button"><img className="biz-search" src={window.searchUrl} /></Link>
                        </form>
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

{/*                         
                            <div>{this.props.users.map(user => {
                                if (user.id === revIds[0]) {
                                    return user.first_name;
                                }
                            })}</div>             */}
                            {/* {this.props.author.first_name} */}
                            {this.props.reviews.map(review => {
                                debugger
                              return  <ReviewListItem
                                    review={review}
                                    key={review.id}
                                    author={this.props.users[review.user_id]}
                            />})}

                            
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
