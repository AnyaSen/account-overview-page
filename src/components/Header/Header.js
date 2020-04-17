import React from "react";

import SearchForm from "../SearchForm/SearchForm";
import UserInfo from "./UserInfo/UserInfo";

export default function Header() {
  return (
    <div>
      <UserInfo userName="SOME NAME" userPicture="" accountsNumber={50} />
      <SearchForm />
    </div>
  );
}
