import React from "react";

import Styles from "./Account.module.scss";

export default function Account({ name, ID, balance, active }) {
  return (
    <div className={Styles.Account}>
      <div className={active ? Styles.activePin : Styles.inactivePin}></div>

      <p>Name: {name}</p>
      <p>ID: {ID}</p>
      <p>Balance: {balance}</p>
    </div>
  );
}
