import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.scss";

import AccountsPage from "./pages/AccountsPage/AccountsPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={AccountsPage} />

        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
