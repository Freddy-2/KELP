import React from "react";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import HeaderContainer from "./header/header_container";
import HomePageContainer from "./homepage/home_page_container";
import { Route, Link, Switch } from 'react-router-dom';
import {AuthRoute} from '../util/route_util';
import BusinessIndexContainer from './businesses/business_index_container';
import BusinessShowContainer from './businesses/business_show_container';

const App = () => (
  <div>
    <Switch>
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <Route exact path="/businesses" component={BusinessIndexContainer} />
    <Route exact path="/businesses/:id" component={BusinessShowContainer} />
    <Route exact path="/" component={HomePageContainer} />
    </Switch>
  </div>
);

export default App;
