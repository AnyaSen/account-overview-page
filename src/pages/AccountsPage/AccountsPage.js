import React from "react";
import Styles from "./AccountsPage.module.scss";

import Header from "../../components/Header/Header";
import AccountsList from "../../components/AccountsList/AccountsList";

export default function AccountsPage() {
  return (
    <div className={Styles.AccountsPage}>
      <Header />
      <AccountsList />
    </div>
  );
}
