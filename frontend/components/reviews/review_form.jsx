import React from 'react';
import Footer from '../footer/footer';
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
    this.props.processForm(this.state).then(() => this.props.history.push("/"));
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
    if (!this.props.user) {
      <Redirect to="/login" />;
    }
    return (
      <>
        <header className="form-page-header">
          <Link to="/" className="logo-link-form-page">
            <img src={window.kelpLogoUrl} className="kelp-logo-form-page" />
          </Link>
        </header>

        {/* <div className="kelp-entry-form">
          <div className="fixy-fix2">
            {this.renderErrors()}
            <div className="fixy-fix3">
              <div className="fixy-fix">


                {this.aboveInputs()}
                <form onSubmit={this.handleSubmit} className="signup-form-box">

                  <div className="signup-login-form">
                    <div>{this.namesForSignUp()}</div>
                    <br />
                    <div className="signup-login-input">
                      <label>
                        <input type="email"
                          placeholder="Email"
                          value={this.state.email}
                          onChange={this.update('email')}
                          className="email-input"
                          required="required"
                        />
                      </label>
                      <br />
                      <label>
                        <input type="password"
                          placeholder="Password"
                          value={this.state.password}
                          onChange={this.update('password')}
                          className="password-input"
                          required="required"
                        />
                      </label>
                    </div>
                    <br />
                    <input className="session-submit" type="submit" value={this.props.formType} />
                    <div>{this.underSubmitButton()}</div>
                  </div>
                </form>
              </div>
              <div className="sponge-five">
                <img className="sponge-five" src={window.spongeFiveUrl} />
              </div>
            </div>
          </div>

        </div> */}
        <Footer />
      </>
    );
  }
}

export default ReviewForm;