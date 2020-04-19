import React, { useContext, useState, useEffect } from "react";
import Styles from "./SearchForm.module.scss";

import InputField from "./InputField/InputField";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton/SecondaryButton";

import { AccountsContext } from "../../contexts/AccountsContext";

import {
  filterAccountsByID,
  filterAccountsByName,
  filterAccountsByNameAndID
} from "../../services/filterAccounts";

export default function SearchForm() {
  const { modifiedAccounts, setModifiedAccounts, accounts } = useContext(
    AccountsContext
  );

  const [nameValue, setNameValue] = useState("");
  const [idValue, setIdValue] = useState("");

  const [isDisabledSearchBtn, setIsDisabledSearchBtn] = useState(true);
  const [isDisabledShowAllBtn, setIsDisabledShowAllBtn] = useState(true);

  useEffect(() => {
    const inputsAreNotEmpty = nameValue || idValue;

    setIsDisabledSearchBtn(!inputsAreNotEmpty);
  }, [nameValue, idValue]);

  const onChangeNameValue = event => {
    setNameValue(event.target.value);
  };

  const onChangeIdValue = event => {
    setIdValue(event.target.value);
  };

  const handleSubmit = () => {
    const filteredAccountsByName = filterAccountsByName(
      modifiedAccounts,
      nameValue
    );
    const filteredAccountsById = filterAccountsByID(modifiedAccounts, idValue);

    const filteredAccountsByNameAndID = filterAccountsByNameAndID(
      nameValue,
      idValue,
      modifiedAccounts
    );

    if (!nameValue) {
      setModifiedAccounts(filteredAccountsById);
    } else if (!idValue) {
      setModifiedAccounts(filteredAccountsByName);
    } else if ((nameValue, idValue)) {
      setModifiedAccounts(filteredAccountsByNameAndID);
    }

    setNameValue("");
    setIdValue("");

    setIsDisabledShowAllBtn(false);
  };

  const showAll = () => {
    setModifiedAccounts(accounts);
    setIsDisabledShowAllBtn(true);
  };

  return (
    <div data-testid="Search-form" className={Styles.SearchForm}>
      <h1>INVESTMENT ACCOUNTS OVERVIEW</h1>

      <form
        onSubmit={e => e.preventDefault()}
        className={Styles.SearchFormContainer}
      >
        <div className={Styles.inputsContainer}>
          <InputField
            placeholder="Name"
            inputValue={nameValue}
            onChange={onChangeNameValue}
          />

          <InputField
            placeholder="ID"
            inputValue={idValue}
            onChange={onChangeIdValue}
          />
        </div>
        <div className={Styles.btnsContainer}>
          <PrimaryButton
            btnText="Search"
            isDisabled={isDisabledSearchBtn}
            onClick={handleSubmit}
          />

          <SecondaryButton
            btnText="Show all"
            isDisabled={isDisabledShowAllBtn}
            onClick={showAll}
          />
        </div>
      </form>
    </div>
  );
}
