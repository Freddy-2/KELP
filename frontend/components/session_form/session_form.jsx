import React from 'react';
import { Link } from "react-router-dom";

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
    this.underSubmitButton = this.underSubmitButton.bind(this);
    this.demoButton = this.demoButton.bind(this);
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

  demoButton(e){
    e.preventDefault();
    this.props.processForm({email:"sponch", password:"sponch1" }).then(() => this.props.history.push("/"))
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

  underSubmitButton(){
    if (this.props.formType === "signup") {
      return (
        <div className="under-submit-session">
          Already on Kelp? <Link to="/login">Login</Link>
        </div>
      );
    } else {
      return (
        <div className="under-submit-session">
          New to Kelp? <Link to="/signup">Sign up</Link>
        </div>
      );
    }
  }

  aboveInputs(){
    if (this.props.formType === "signup") { 
      return(
        <div>
         Sign Up for Kelp <br/>
       Connect with great local businesses <br/>
       By continuing, you agree to Kelp’s Terms of Service and acknowledge Kelp’s Privacy Policy.
        </div>
      )
    } else{
        return(
          <div>
            Log In to Kelp <br/>
          New to Kelp? <Link to="/signup">Sign up</Link> <br/>
          By logging in, you agree to Kelp’s Terms of Service and Privacy Policy. <br/>
          <button onClick={this.demoButton}>Demo User</button>
          </div>

        )
      }
  }
   


  render() {
    if (this.props.user) {
      <Redirect to="/" />;
    }
   return (  
     <>    
      <header className="form-page-header">
      <Link to="/" className="logo-link-form-page">
         <img src={window.kelpLogoUrl} className="kelp-logo-form-page" />
       </Link>
       </header>
      <div className="kelpEntryForm">
         <div className="spongeFive">
       <img src={window.spongeFiveUrl}  />
       </div>
        <form onSubmit={this.handleSubmit} className="signup-form-box">
        {this.aboveInputs()}
          
          {this.renderErrors()}
          <div className="signup-login-form">
           <div>{this.namesForSignUp()}</div> 
            <br />
            <label>email:
              <input type="email"
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
            <div>{this.underSubmitButton()}</div>
          </div>
        </form>
      </div>

      </>
    );
  }
}

export default SessionForm;