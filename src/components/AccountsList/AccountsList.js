import React, { useContext } from "react";
import { AccountsContext } from "../../contexts/AccountsContext";
import Styles from "./AccountsList.module.scss";

import Account from "./Account/Account";

export default function AccountsList() {
  const { accName, accID, accBalance } = useContext(AccountsContext);

  return (
    <div className={Styles.AccountsList}>
      <Account name={accName} ID={accID} balance={accBalance} active={true} />
    </div>
  );
}
