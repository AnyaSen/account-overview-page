import React from "react";
import Styles from "./Account.module.scss";

export default function Account({ accName, accID, accBalance, active }) {
  return (
    <div className={Styles.Account}>
      <p>Name: {accName}</p>
      <p>ID: {accID}</p>
      <p>Balance: {accBalance}</p>
      {active ? <div className={Styles.activePin}></div>: null}
    </div>
  );
}
