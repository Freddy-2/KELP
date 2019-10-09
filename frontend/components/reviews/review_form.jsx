import React from 'react';
// import Footer from '../footer/footer';
import { Link, Redirect } from 'react-router-dom';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      rating: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processReview(this.state).then(() => this.props.history.push("/"));
  }



  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li className="big-error-hours" key={`error-${i}`}>
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
        <header className="form-page-header">
          <Link to="/" className="logo-link-form-page">
            <img src={window.kelpLogoUrl} className="kelp-logo-form-page" />
          </Link>
        </header>

        <div className="review-form">
            {this.renderErrors()}

            <form onSubmit={this.handleSubmit} className="review-form-box">
              <div>RATING</div>
              <textarea className="review-text-body" cols="30" rows="10"></textarea>
            <input className="review-submit" type="submit" value="Post Review" />
            </form>


        </div>
      </>
    );
  }
}

export default ReviewForm;