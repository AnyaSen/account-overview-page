import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { UserInfoContextProvider } from "./contexts/UserInfoContext";
import { AccountsContextProvider } from "./contexts/AccountsContext";

ReactDOM.render(
  <React.StrictMode>
    <UserInfoContextProvider>
      <AccountsContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AccountsContextProvider>
    </UserInfoContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
