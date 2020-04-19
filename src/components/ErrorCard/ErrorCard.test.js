import React from "react";
import { render, cleanup } from "@testing-library/react";

import ErrorCard from "./ErrorCard";

import { LoadingContext } from "../../contexts/LoadingContext";
import { ErrorContext } from "../../contexts/ErrorContext";
import { AccountsContext } from "../../contexts/AccountsContext";

const createRenderTree = (isAccountsError, isUserInfoError, errorMessages) => (
  <LoadingContext.Provider value={{ isAccountsLoading: false }}>
    <ErrorContext.Provider
      value={{
        isAccountsError,
        isUserInfoError,
        errorMessages
      }}
    >
      <AccountsContext.Provider value={{ modifiedAccounts: [] }}>
        <ErrorCard />
      </AccountsContext.Provider>
    </ErrorContext.Provider>
  </LoadingContext.Provider>
);

describe("<ErrorCard />", () => {
  afterAll(cleanup);

  const errorMessages = {
    accountsError: "Sorry, could not get the accounts data",
    userInfoError: "Sorry, could not get the user data"
  };

  test("Should contain the correct image and shows error message for accounts", () => {
    const { getByTestId, getByAltText, container } = render(
      createRenderTree(true, false, errorMessages)
    );

    const errorIcon = getByAltText("Error");
    const errortext = getByTestId("errorMessage");

    expect(errorIcon.src).toContain("error.png");
    expect(errortext.textContent).toBe(errorMessages.accountsError);

    expect(container.firstChild).toMatchSnapshot();
  });

  test("Should show error message for userInfo", () => {
    const { getByTestId } = render(
      createRenderTree(false, true, errorMessages)
    );

    const errortext = getByTestId("errorMessage");

    expect(errortext.textContent).toBe(errorMessages.userInfoError);
  });
});
