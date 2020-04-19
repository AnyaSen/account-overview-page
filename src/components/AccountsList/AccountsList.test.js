import React from "react";
import { render, cleanup } from "@testing-library/react";

import { AccountsContext } from "../../contexts/AccountsContext";
import { ErrorContext } from "../../contexts/ErrorContext";
import { LoadingContext } from "../../contexts/LoadingContext";

import accountsArray from "./mock/mockAccounts.js";
import AccountsList from "./AccountsList";

describe("<AccountsList />", () => {
  afterEach(cleanup);

  const tree = (
    <LoadingContext.Provider value={{isAccountsLoading: false}}>
      <ErrorContext.Provider value={{isAccountsError: false}}>
        <AccountsContext.Provider value={{ modifiedAccounts: accountsArray }}>
          <AccountsList />
        </AccountsContext.Provider>
      </ErrorContext.Provider>
    </LoadingContext.Provider>
  );

  const { getAllByTestId,  getByTestId } = render(tree);

  const allAccounts = getAllByTestId("Account");
  const allAccountNames = getAllByTestId("AccountName");
  const allAccountIDs = getAllByTestId("AccountID");
  const allAccountBalances = getAllByTestId("AccountBalance");

  test("Should render all accounts.", () => {
    const numberOfAccounts = accountsArray.length;

    expect(allAccounts.length).toEqual(numberOfAccounts);
  });

  test("Should match all names, ids of context state", () => {

    allAccountNames.forEach((accountName,index)=> {
      expect(accountName.textContent).toContain(accountsArray[index].name);
    })

    allAccountIDs.forEach((accountID,index)=> {
      expect(accountID.textContent).toContain(accountsArray[index].id);
    })

    allAccountBalances.forEach((accountBalance,index)=> {
      expect(accountBalance.textContent).toContain(accountsArray[index].balance);
    })
    });
  
  
  
});
 