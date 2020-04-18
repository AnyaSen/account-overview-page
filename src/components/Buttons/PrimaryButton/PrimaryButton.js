import React from "react";
import Styles from "./PrimaryButton.module.scss";


export default function PrimaryButton({ btnText }) {
  return <button className={Styles.PrimaryButton}>{btnText}</button>;
}
