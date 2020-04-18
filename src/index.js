import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { UserInfoContextProvider } from "./contexts/UserInfoContext";
import { AccountsContextProvider } from "./contexts/AccountsContext";
import { LoadingContextProvider } from "./contexts/LoadingContext";
import { ErrorContextProvider } from "./contexts/ErrorContext";

ReactDOM.render(
  <React.StrictMode>
    <ErrorContextProvider>
      <LoadingContextProvider>
        <UserInfoContextProvider>
          <AccountsContextProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </AccountsContextProvider>
        </UserInfoContextProvider>
      </LoadingContextProvider>
    </ErrorContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
