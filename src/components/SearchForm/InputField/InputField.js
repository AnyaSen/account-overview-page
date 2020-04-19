import React from "react";
import Styles from "./InputField.module.scss";

export default function InputField({ placeholder, inputValue, onChange }) {
  return (
    <input
      className={Styles.InputField}
      type="text"
      placeholder={placeholder}
      value={inputValue}
      onChange={onChange}
      data-testid="InputField"
    />
  );
}
