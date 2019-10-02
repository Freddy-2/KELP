import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store'
import Root from './components/root'

document.addEventListener("DOMContentLoaded", () => {

  let store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={store}/>, document.getElementById("root"));
});