import React from "react";
import ReactDOM from "react-dom";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { applyMiddleware } from "redux";

import configureStore from './stores/store.js';
import App from './components/app.jsx';
import {fetchBenches} from "./actions/bench_actions.js";


document.addEventListener("DOMContentLoaded", () => {
  window.fetchBenches = fetchBenches;
  let preloadedState = {};
  if (window.currentUser) {
    preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    };
    delete window.currentUser;
  }
  const root = document.getElementById("root");
  const store = configureStore(preloadedState, applyMiddleware(thunk, logger));
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  ReactDOM.render(<App store={store}/>, root);
});
