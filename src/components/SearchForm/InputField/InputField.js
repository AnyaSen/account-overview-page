import React from "react";
import Styles from "./InputField.module.scss";


export default function InputField({placehold}) {
  return <input className={Styles.InputField} type='text' placeholder={placehold}/>;
}
