import React, { useState, createContext, useEffect, useContext } from "react";
import { fetchData } from "../services/fetchData";

import { LoadingContext } from "./LoadingContext";
import { ErrorContext } from "./ErrorContext";

export const UserInfoContext = createContext();

export const UserInfoContextProvider = ({ children }) => {
  const { setIsUserInfoLoading } = useContext(LoadingContext);
  const { setIsUserInfoError } = useContext(ErrorContext);

  const [name, setName] = useState("SOME NAME");

  const setInitialUserData = async () => {
    const user_info_URL =
      "https://qmkjbvj35b.execute-api.eu-north-1.amazonaws.com/get/user/145127236/";

    try {
      setIsUserInfoLoading(true);
      const userData = await fetchData(user_info_URL);

      const { firstName, lastName } = userData;

      setName(`${firstName} ${lastName}`);
      setIsUserInfoLoading(false);
    } catch (error) {
      console.log(error);
      setIsUserInfoError(true);
      setIsUserInfoLoading(false);
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
