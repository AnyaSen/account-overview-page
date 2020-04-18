import React, { useState, createContext, useEffect } from "react";
import { fetchData } from "../services/fetchData";

export const UserInfoContext = createContext();

export const UserInfoContextProvider = ({ children }) => {
  const [name, setName] = useState("SOME NAME");

  const setInitialUserData = async () => {
    const user_info_URL =
      "https://qmkjbvj35b.execute-api.eu-north-1.amazonaws.com/get/user/145127236/";

    try {
      const userData = await fetchData(user_info_URL);

      const { firstName, lastName } = userData;

      setName(`${firstName} ${lastName}`);
    } catch (error) {
      console.log(error);
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
