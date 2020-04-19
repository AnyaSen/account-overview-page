import React, { useState, createContext, useEffect, useContext } from "react";
import { fetchData } from "../services/fetchData";

import { LoadingContext } from "./LoadingContext";
import { ErrorContext } from "./ErrorContext";

export const AccountsContext = createContext();

export const AccountsContextProvider = ({ children }) => {
  const { setIsAccountsLoading } = useContext(LoadingContext);
  const { setIsAccountsError } = useContext(ErrorContext);

  const [accNumber, setAccNumber] = useState("");
  const [accounts, setAccounts] = useState([]);
  const [modifiedAccounts, setModifiedAccounts] = useState([]);

  const setInitialUserData = async () => {
    const user_accounts_URL =
      "https://qmkjbvj35b.execute-api.eu-north-1.amazonaws.com/get/user/145127236/investments";

    try {
      setIsAccountsLoading(true);

      const accountsData = await fetchData(user_accounts_URL);

      setAccounts(accountsData);
      setModifiedAccounts(accountsData);
      setAccNumber(accountsData.length);
      setIsAccountsLoading(false);
    } catch (error) {
      console.log(error);

      setIsAccountsError(true);
      setIsAccountsLoading(false);
    }
  };

  useEffect(() => {
    setInitialUserData();
  }, []);

  return (
    <AccountsContext.Provider
      value={{
        accNumber,
        accounts,
        modifiedAccounts,
        setModifiedAccounts
      }}
    >
      {children}
    </AccountsContext.Provider>
  );
};
