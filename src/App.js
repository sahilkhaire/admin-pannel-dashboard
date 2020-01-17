import React from 'react';
import './App.css';

import { Switch, Route, Redirect } from "react-router-dom";

import Main from "./containers/Main";


function App() {
  return (
    <Switch>
      <Route path="/" component={Main} />
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
