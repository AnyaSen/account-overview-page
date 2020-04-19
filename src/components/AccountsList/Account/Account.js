import React from "react";

import Styles from "./Account.module.scss";

export default function Account({ name, ID, balance, active }) {
  return (
    <div data-testid="Account" className={Styles.Account}>
      <div
        data-testid="active-pin"
        className={active ? Styles.activePin : Styles.inactivePin}
      ></div>

      <p data-testid="AccountName">Name: {name}</p>
      <p data-testid="AccountID">ID: {ID}</p>
      <p data-testid="AccountBalance">Balance: {balance}</p>
    </div>
  );
}
