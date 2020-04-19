import React, { createContext, useState } from "react";

export const LoadingContext = createContext();

export const LoadingContextProvider = ({ children }) => {
  const [isAccountsLoading, setIsAccountsLoading] = useState(true);
  const [isUserInfoLoading, setIsUserInfoLoading] = useState(true);

  return (
    <LoadingContext.Provider
      value={{
        isAccountsLoading,
        setIsAccountsLoading,
        isUserInfoLoading,
        setIsUserInfoLoading
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};
