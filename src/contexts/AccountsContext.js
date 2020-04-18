import React, { useState, createContext, useEffect } from "react";
import { fetchData } from "../services/fetchData";

export const AccountsContext = createContext();

export const AccountsContextProvider = ({ children }) => {
  const [accNumber, setAccNumber] = useState(90);
  const [accounts, setAccounts] = useState([]);

  const setInitialUserData = async () => {
    const user_accounts_URL =
      "https://qmkjbvj35b.execute-api.eu-north-1.amazonaws.com/get/user/145127236/investments";

    try {
      const accountsData = await fetchData(user_accounts_URL);

      setAccounts(accountsData);
      setAccNumber(accountsData.length);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setInitialUserData();
  }, []);

  return (
    <AccountsContext.Provider
      value={{
        accNumber,
        accounts
      }}
    >
      {children}
    </AccountsContext.Provider>
  );
};
