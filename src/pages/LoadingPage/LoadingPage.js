import React from "react";
import Styles from "./LoadingPage.module.scss";

import loader from "../../assets/img/loader.svg";

export default function LoadingPage() {
  return (
    <div data-testid="Loader" className={Styles.LoadingPage}>
      <img src={loader} alt="loader icon" />

      <h3>Loading...</h3>
    </div>
  );
}
