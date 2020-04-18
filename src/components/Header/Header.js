import React, { useContext } from "react";
import { UserInfoContext } from "../../contexts/UserInfoContext";

import Styles from "./Header.module.scss";
import userPic from "../../assets/img/userPic.svg";

import SearchForm from "../SearchForm/SearchForm";
import UserInfo from "./UserInfo/UserInfo";

export default function Header() {
  const { name } = useContext(UserInfoContext);

  return (
    <div className={Styles.Header}>
      <UserInfo userName={name} userPicture={userPic} accountsNumber={50} />
      <SearchForm />
    </div>
  );
}
