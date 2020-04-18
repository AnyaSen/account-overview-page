import React from "react";
import Styles from "./SearchForm.module.scss";

import InputField from "./InputField/InputField";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton/SecondaryButton"

export default function SearchForm() {
  return (
    <div className={Styles.SearchForm}>
      <h1>INVESTMENT ACCOUNTS OVERVIEW</h1>

      <div className={Styles.SearchFormContainer}>
        <InputField placehold='Name'/>
        <InputField placehold='ID'/>
        <PrimaryButton btnText="Search" />
        <SecondaryButton btnText="Show all" />
      </div>
    </div>
  );
}
