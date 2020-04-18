import React from "react";
import Styles from "./AccountsList.module.scss";

import Account from "./Account/Account";

export default function AccountsList() {
  return (
    <div className={Styles.AccountsList}>
      <Account accName="Funding_account" accID="DKUW67" accBalance="50€" active={true} />
      <Account accName="Funding_account" accID="DKUW67" accBalance="50€" active={false} />
      <Account accName="Funding_account" accID="DKUW67" accBalance="50€" active={true} />
      
    </div>
  );
}
