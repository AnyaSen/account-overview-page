import React from "react";

export default function UserInfo({ userName, userPicture, accountsNumber }) {
  return (
    <div>
      <img src={userPicture} />
      <p>{userName}</p>
      <p>Number of accounts: {accountsNumber}</p>
    </div>
  );
}
