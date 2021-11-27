import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import Users from "./containers/Users";
import Friend from "./containers/Friend";

import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./reducers";

const store = createStore(allReducers);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <div>
      <Users />
      <Friend />
    </div>
  </Provider>,
  rootElement
);
