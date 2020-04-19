import React, { useContext } from "react";
import { AccountsContext } from "../../contexts/AccountsContext";
import Styles from "./AccountsList.module.scss";

import Account from "./Account/Account";
import { ErrorContext } from "../../contexts/ErrorContext";
import ErrorCard from "../../pages/ErrorCard/ErrorCard";
import { LoadingContext } from "../../contexts/LoadingContext";
import LoadingPage from "../../pages/LoadingPage/LoadingPage";

export default function AccountsList() {
  const { modifiedAccounts } = useContext(AccountsContext);
  const { isAccountsError } = useContext(ErrorContext);
  const { isAccountsLoading } = useContext(LoadingContext);

  if (isAccountsLoading) return <LoadingPage />;
  if (isAccountsError) return <ErrorCard />;

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
