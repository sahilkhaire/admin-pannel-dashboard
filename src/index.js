import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import { configureStore } from "./redux/configureStore";

const store = configureStore({});

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter basename="/todo-app">
        <Component />
      </BrowserRouter>
    </Provider>,
    document.querySelector("#root")
  );
};

render(App);
