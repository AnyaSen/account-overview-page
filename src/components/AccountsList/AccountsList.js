import React, { useContext } from "react";
import { AccountsContext } from "../../contexts/AccountsContext";
import Styles from "./AccountsList.module.scss";

import Account from "./Account/Account";

export default function AccountsList() {
  const { modifiedAccounts } = useContext(AccountsContext);

  return (
    <div className={Styles.AccountsList}>
      {modifiedAccounts.length === 0 ? (
        <h3>Sorry, account not found</h3>
      ) : (
        modifiedAccounts.map((account, index) => {
          const { name, id, balance, currency, accountState } = account;
          const isActive = accountState === "ACTIVE";

          return (
            <Account
              name={name}
              ID={id}
              balance={balance + currency.symbol}
              active={isActive}
              key={index}
            />
          );
        })
      )}
    </div>
  );
}
