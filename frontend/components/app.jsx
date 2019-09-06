import React from "react";
import { Provider } from "react-redux";
import { HashRouter, Route } from "react-router-dom";

import GreetingContainer from './greeting_container.js';
import SignupFormContainer from './signup_form_container.js';
import LoginFormContainer from './login_form_container.js';
import SearchContainer from "./search_container.js";
import BenchFormContainer from "./bench_form_container.js";
import {AuthRoute, ProtectedRoute} from "../utils/route_util.jsx";


const App = (props) => (
  <Provider store={props.store} >
    <HashRouter>

      <h1>Bench BnB</h1>
      <GreetingContainer />
      <AuthRoute path="/signup" component={SignupFormContainer}/>
      <AuthRoute path="/login" component={LoginFormContainer}/>
      <Route exact path="/" component={SearchContainer} />
      <Route exact path="/benches/new" component={BenchFormContainer} />
    </HashRouter>
  </Provider>
);

export default App;
