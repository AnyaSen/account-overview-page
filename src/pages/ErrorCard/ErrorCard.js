import React, { useContext } from "react";

import Styles from "./ErrorCard.module.scss";

import errorIcon from "../../assets/img/error.png";
import { ErrorContext } from "../../contexts/ErrorContext";

export default function ErrorCard() {
  const { errorMessages, isAccountsError, isUserInfoError } = useContext(
    ErrorContext
  );

  const ChooseErrorMessage = () => {
    if (isAccountsError) {
      return errorMessages.accountsError;
    } else if (isUserInfoError) {
      return errorMessages.userInfoError;
    }
  };

  return (
    <div className={Styles.ErrorCardContainer}>
      <img src={errorIcon} alt="Error" />

      <h3>{ChooseErrorMessage()}</h3>
    </div>
  );
}
