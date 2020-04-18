import React, { useContext } from "react";
import { AccountsContext } from "../../../contexts/AccountsContext";

import Styles from "./UserInfo.module.scss";

export default function UserInfo({ userName, userPicture, accountsNumber }) {
  const { accNumber } = useContext(AccountsContext);

  return (
    <div className={Styles.UserInfoContainer}>
      <div className={Styles.UserImgContainer}>
        <img src={userPicture} alt="User Face" />
        <p>{userName}</p>
      </div>

      <p>Number of accounts: {accNumber}</p>
    </div>
  );
}
