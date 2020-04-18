import React, { useState, createContext, useEffect, useContext } from "react";
import { fetchData } from "../services/fetchData";

import { LoadingContext } from "./LoadingContext";
import { ErrorContext } from "./ErrorContext";

export const UserInfoContext = createContext();

export const UserInfoContextProvider = ({ children }) => {
  const { setIsLoading } = useContext(LoadingContext);
  const { setIsError } = useContext(ErrorContext);

  const [name, setName] = useState("SOME NAME");

  const setInitialUserData = async () => {
    const user_info_URL =
      "https://qmkjbvj35b.execute-api.eu-north-1.amazonaws.com/get/user/145127236/";

    try {
      const userData = await fetchData(user_info_URL);

      const { firstName, lastName } = userData;

      setName(`${firstName} ${lastName}`);
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
    <UserInfoContext.Provider
      value={{
        name
      }}
    >
      {children}
    </UserInfoContext.Provider>
  );
};
