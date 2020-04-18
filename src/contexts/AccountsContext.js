import React, { useState, createContext } from "react";

export const AccountsContext = createContext();

export const AccountsContextProvider = ({ children }) => {
  const [accNumber, setAccNumber] = useState(90);
  const [accName, setAccName] = useState("FUNDING_ACCOUNT");
  const [accID, setAccID] = useState("DKUW67");
  const [accBalance, setAccBalance] = useState("60€");

  return (
    <AccountsContext.Provider
      value={{
        accNumber,
        accName,
        accID,
        accBalance
      }}
    >
      {children}
    </AccountsContext.Provider>
  );
};
