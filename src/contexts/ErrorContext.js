import React, { createContext, useState } from "react";

export const ErrorContext = createContext();

export const ErrorContextProvider = ({ children }) => {
  const [isAccountsError, setIsAccountsError] = useState(false);
  const [isUserInfoError, setIsUserInfoError] = useState(false);

  return (
    <ErrorContext.Provider
      value={{
        isAccountsError,
        setIsAccountsError,
        isUserInfoError,
        setIsUserInfoError
      }}
    >
      {children}
    </ErrorContext.Provider>
  );
};
