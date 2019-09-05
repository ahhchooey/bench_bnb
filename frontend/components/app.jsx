import React from "react";
import { Provider } from "react-redux";
import { HashRouter, Route } from "react-router-dom";
import GreetingContainer from './greeting_container';
import SignupFormContainer from './signup_form_container';
import LoginFormContainer from './login_form_container';



const App = (props) => (
  <Provider store={props.store} >

    <HashRouter>
      <div>
        <header>
          <h1>Bench BnB</h1>
          <GreetingContainer />
        </header>
      </div>
      <Route path="/signup" component={SignupFormContainer}/>
      <Route path="/login" component={LoginFormContainer}/>

    
    </HashRouter>

  </Provider>

);

export default App;