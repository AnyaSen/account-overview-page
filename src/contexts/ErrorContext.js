import React, { createContext, useState } from "react";

export const ErrorContext = createContext();

export const ErrorContextProvider = ({ children }) => {
  const [isAccountsError, setIsAccountsError] = useState(false);
  const [isUserInfoError, setIsUserInfoError] = useState(false);
  const [errorMessages, setErrorMessages] = useState({
    accountsError: "Sorry, could not get the accounts data",
    userInfoError: "Sorry, could not get the user data"
  });

  return (
    <ErrorContext.Provider
      value={{
        isAccountsError,
        setIsAccountsError,
        isUserInfoError,
        setIsUserInfoError,
        errorMessages
      }}
    >
      {children}
    </ErrorContext.Provider>
  );
};
