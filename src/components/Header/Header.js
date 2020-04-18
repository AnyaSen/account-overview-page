import React from "react";

import Styles from './Header.module.scss'
import userPic from "../../assets/img/userPic.svg";

import SearchForm from "../SearchForm/SearchForm";
import UserInfo from "./UserInfo/UserInfo";

export default function Header() {
  return (
    <div className={Styles.Header}>
      <UserInfo
        userName="SOME NAME"
        userPicture={userPic}
        accountsNumber={50}
      />
      <SearchForm />
    </div>
  );
}
