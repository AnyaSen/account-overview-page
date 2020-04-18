import React from "react";
import Styles from "./InputField.module.scss";

export default function InputField({ placehold, inputValue, onChange }) {
  return (
    <input
      className={Styles.InputField}
      type="text"
      placeholder={placehold}
      value={inputValue}
      onChange={onChange}
    />
  );
}
