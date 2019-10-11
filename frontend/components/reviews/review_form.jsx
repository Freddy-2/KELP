import React from 'react';
import Footer from '../footer/footer';
import { Link, withRouter, Redirect } from 'react-router-dom';



class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      rating: 0,
      business_id: "",
      user_id: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.fetchBusiness(this.props.match.params.id)
  }


  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const review = {
      body: this.state.body,
      rating: this.state.rating,
      user_id: this.props.user.id,
      business_id: this.props.business.id,
      
    }
    this.props.processReview(review).then(this.props.history.push(`/businesses/${this.props.match.params.id}`))
  }



  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li className="biggly-error-hours" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    // if (!this.props.user) {
    //   <Redirect to="/login" />;
    // }
    return (
      <>
        <header className="rev-form-page-header">
          <Link to="/" className="logo-link-form-page">
            <img src={window.kelpLogoUrl} className="kelp-logo-form-page" />
          </Link>
        </header>

        <div className="review-form">
            {this.renderErrors()}
           
            <form onSubmit={this.handleSubmit} className="review-form-box">
            <Link className='rev-form-title' to={`/businesses/${this.props.business.id}`}> <span> {this.props.business.title}</span></Link>
              <div className='fake-box'>
              <div className='rev-form-rating-box'>
              <input type="number" value={this.state.rating} className="rating-thingy" min="1" max="5" onChange={this.update("rating")}/>
              <div className='rating-texty'>Select your rating</div>
              </div>
              <textarea className="review-text-body" cols="30" rows="10" value={this.state.body} placeholder="Your review helps others learn about great underwater businesses.                                                                                                       Please don't review this business if you received a freebie for writing this review, or if you're connected in any way to the owner or employees."  onChange={this.update("body")} />
            <input className="review-submit" type="submit" value="Post Review" />
            </div>
            </form>

        
        </div>
        <Footer />
      </>
    );
  }
}

export default withRouter(ReviewForm);