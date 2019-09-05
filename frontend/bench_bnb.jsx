
import React from "react";
import ReactDOM from "react-dom";
import configureStore from './stores/store';
import { applyMiddleware } from "redux";
import logger from 'redux-logger';
import App from './components/app';
import thunk from 'redux-thunk';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore({}, applyMiddleware(thunk, logger));
  window.getState = store.getState;

  ReactDOM.render(<App store={store}/>, root);
});
