import React from "react";
import Styles from "./PrimaryButton.module.scss";

export default function PrimaryButton({ btnText, onClick, isDisabled }) {
  return (
    <button
      className={Styles.PrimaryButton}
      type="submit"
      value="submit"
      onClick={onClick}
      disabled={isDisabled}
    >
      {btnText}
    </button>
  );
}
