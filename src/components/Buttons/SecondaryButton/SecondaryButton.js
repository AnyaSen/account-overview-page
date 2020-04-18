import React from "react";
import Styles from "./SecondaryButton.module.scss";


export default function SecondaryButton({ btnText }) {
  return <button className={Styles.SecondaryButton}>{btnText}</button>;
}
