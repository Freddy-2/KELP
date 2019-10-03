import React from "react";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import HeaderContainer from "./header/header_container";
import HomePageContainer from "./homepage/home_page_container";
import { Route, Link } from 'react-router-dom';

const App = () => (
  <div>
    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
    <Route exact path="/" component={HomePageContainer} />
  </div>
);

export default App;
