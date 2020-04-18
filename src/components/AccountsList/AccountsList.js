import React, { useContext } from "react";
import { AccountsContext } from "../../contexts/AccountsContext";
import Styles from "./AccountsList.module.scss";

import Account from "./Account/Account";

export default function AccountsList() {
  const { accounts } = useContext(AccountsContext);

  return (
    <div className={Styles.AccountsList}>
      {accounts.map((account, index) => {
        const { name, id, balance } = account;
        return (
          <Account
            name={name}
            ID={id}
            balance={balance}
            active={true}
            key={index}
          />
        );
      })}
    </div>
  );
}
