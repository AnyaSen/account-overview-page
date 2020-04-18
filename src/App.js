import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.scss";

import AccountsPage from "./pages/AccountsPage/AccountsPage";
import ErrorCard from "./pages/ErrorCard/ErrorCard";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={AccountsPage} />
        <Route component={ErrorCard} />
      </Switch>
    </div>
  );
}

export default App;
