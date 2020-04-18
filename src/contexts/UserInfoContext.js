import React, { useState, createContext } from "react";

export const UserInfoContext = createContext();

export const UserInfoContextProvider = ({ children }) => {
  const [name, setName] = useState("SOME NAME");

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
