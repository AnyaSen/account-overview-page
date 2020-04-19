import React, { useContext } from "react";
import Styles from "./Header.module.scss";

import { UserInfoContext } from "../../contexts/UserInfoContext";
import { AccountsContext } from "../../contexts/AccountsContext";

import userPic from "../../assets/img/userPic.svg";

import SearchForm from "../SearchForm/SearchForm";
import UserInfo from "./UserInfo/UserInfo";

export default function Header() {
  const { name } = useContext(UserInfoContext);
  const { accNumber } = useContext(AccountsContext);

  return (
    <div data-testid="Header" className={Styles.Header}>
      <UserInfo
        userName={name}
        userPicture={userPic}
        accountsNumber={accNumber}
      />

      <SearchForm />
    </div>
  );
}
