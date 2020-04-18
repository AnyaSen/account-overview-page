import React from "react";

import Styles from "./UserInfo.module.scss";

export default function UserInfo({ userName, userPicture, accountsNumber }) {
  return (
    <div className={Styles.UserInfoContainer}>
      <div className={Styles.UserImgContainer}>
        <img src={userPicture} alt="User Face" />
        <p>{userName}</p>
      </div>

      <p>Number of accounts: {accountsNumber}</p>
    </div>
  );
}
