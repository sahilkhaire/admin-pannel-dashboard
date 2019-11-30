import React from 'react';
import './App.css';

import { Switch, Route, Redirect } from "react-router-dom";

import Todo from "./containers/todo";
import Login from "./containers/login";
import Registration from './containers/registration';


function App() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/todo-list" component={Todo} />
      <Route path="/register" component={Registration} />
      <Redirect to="/todo-list" />
    </Switch>
  );
}

export default App;
