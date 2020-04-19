import React from "react";
import { Link } from "react-router-dom";

import Styles from "./ErrorCard.module.scss";

import errorIcon from "../../assets/img/error.png";
import SecondaryButton from "../../components/Buttons/SecondaryButton/SecondaryButton";

export default function ErrorCard() {
  return (
    <div className={Styles.ErrorCardContainer}>
      <img src={errorIcon} alt="Error" />

      <h3>Sorry, something went wrong.</h3>

      <Link to="/">
        <SecondaryButton btnText="Go back" />
      </Link>
    </div>
  );
}
