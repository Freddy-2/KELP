import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      first_name: '',
      last_name: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.namesForSignUp = this.namesForSignUp.bind(this);
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
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  namesForSignUp(){
    if (this.props.formType === "signup") {
      return(
      <div className="signup-first-last">
      <label>first_name:
          <input type="first_name"
          value={this.state.first_name}
          onChange={this.update('first_name')}
          className="signup-input"
        />
      </label>
      <label>last_name:
          <input type="last_name"
          value={this.state.last_name}
          onChange={this.update('last_name')}
          className="signup-input"
        />
      </label>
      </div>);
    }
    return '';
  }
   


  render() {
    if (this.props.user) {
      <Redirect to="/" />;
    }
   return (
      <div className="kelpEntryForm">
        <form onSubmit={this.handleSubmit} className="signup-form-box">
          Welcome to Kelp!
          <br />
          Please {this.props.formType} or {this.props.navLink}
          {this.renderErrors()}
          <div className="signup-login-form">
            {this.namesForSignUp()}
            <br />
            <label>email:
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
               className="signup-login-input"
              />
            </label>
            <br />
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
               className="signup-login-input"
              />
            </label>
            <br />
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;