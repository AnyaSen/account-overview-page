import React from "react";
import Styles from "./SecondaryButton.module.scss";

export default function SecondaryButton({ btnText, isDisabled, onClick }) {
  return (
    <button
      className={Styles.SecondaryButton}
      disabled={isDisabled}
      onClick={onClick}
    >
      {btnText}
    </button>
  );
}
