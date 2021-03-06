import React from 'react';
import { Link } from "react-router-dom";
import Footer from '../footer/footer';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      // prof_pic: window.spongeFiveUrl
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
    this.props.processForm({ email:"MY@LEG.com", password:"sponch0" }).then(() => this.props.history.push("/"))
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li className="big-error-hours" key={`error-${i}`}>   
              <button className="error-button-time" onClick={this.props.clearErrors}>X</button>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  namesForSignUp(){
    if (this.props.formType === "Sign Up") {
      return(
      <div className="signup-first-last">
      <label>
          <input type="first_name"
          placeholder="First Name"
          value={this.state.first_name}
          onChange={this.update('first_name')}
          className="signup-input"
          required="required"
        />
      </label>
      <label>
          <input type="last_name"
          placeholder="Last Name"
          value={this.state.last_name}
          onChange={this.update('last_name')}
          className="signup-input"
          required="required"
        />
      </label>
      </div>);
    }
    return '';
  }

  underSubmitButton(){
    if (this.props.formType === "Sign Up") {
      return (
        <div className="under-submit-session">
          Already on Kelp? {this.props.nav}
        </div>
      );
    } else {
      return (
        <div className="under-submit-session">
          New to Kelp? {this.props.nav}
        </div>
      );
    }
  }

  aboveInputs(){
    if (this.props.formType === "Sign Up") { 
      return(
        <div className="up-top">
        <h2 className="signup-login-h2">Sign Up for Kelp</h2> <br/>
       <p className="subhead"> Connect with great local businesses </p> <br/>
      <p className="terms-and-condits"> By continuing, you agree to Kelp’s Terms of Service and acknowledge Kelp’s Privacy Policy.</p>
          <p>Redirect To <Link to="/login" className="demo-redirect">Demo Login</Link></p>
          <p className="or-line"><span className="or-span">OR</span></p>
        </div>
      )
    } else{
        return(
          <div className="up-top">
            <h2 className="signup-login-h2"> Log In to Kelp</h2> <br/>
            <p className="subhead"> New to Kelp? <Link to="/signup">Sign up</Link></p> <br/>
            <p className="terms-and-condits">By logging in, you agree to Kelp’s Terms of Service and Privacy Policy.</p>  <br/>
            <button type="button" onClick={this.demoButton}>Demo User</button>
          <p className="or-line"><span className="or-span">OR</span></p>
          </div>

        )
      }
  }
   


  render() {
    // if (this.props.user) {
    //   <Redirect to="/" />;
    // }
   return (  
     <>    
      <header className="form-page-header">
      <Link to="/" className="logo-link-form-page">
         <img src={window.kelpLogoUrl} className="kelp-logo-form-page" />
       </Link>
       
       </header>
       
      <div className="kelp-entry-form">
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
           <img className="sponge-five" src={window.spongeFiveUrl}/>
      </div>
      </div>
      </div>
      
      </div>
      <Footer />
      </>
    );
  }
}

export default SessionForm;