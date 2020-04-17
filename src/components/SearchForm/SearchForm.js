import React from "react";

import InputField from "./InputField/InputField";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";

export default function SearchForm() {
  return (
    <div>
      <h1>INVESTMENT ACCOUNTS OVERVIEW</h1>
      <InputField />
      <InputField />
      <PrimaryButton btnText="Search" />
      <PrimaryButton btnText="Show all" />
    </div>
  );
}
