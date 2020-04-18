import React, { useState, createContext, useEffect, useContext } from "react";
import { fetchData } from "../services/fetchData";

import { LoadingContext } from "./LoadingContext";
import { ErrorContext } from "./ErrorContext";

export const AccountsContext = createContext();

export const AccountsContextProvider = ({ children }) => {
  const { setIsLoading } = useContext(LoadingContext);
  const { setIsError } = useContext(ErrorContext);

  const [accNumber, setAccNumber] = useState("");
  const [accounts, setAccounts] = useState([]);
  const [modifiedAccounts, setModifiedAccounts] = useState([]);

  const setInitialUserData = async () => {
    const user_accounts_URL =
      "https://qmkjbvj35b.execute-api.eu-north-1.amazonaws.com/get/user/145127236/investments";

    try {
      const accountsData = await fetchData(user_accounts_URL);

      setAccounts(accountsData);
      setModifiedAccounts(accountsData);
      setAccNumber(accountsData.length);

      setIsLoading(false);
    } catch (error) {
      console.log(error);

      setIsError(true);
      setIsLoading(false);
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
