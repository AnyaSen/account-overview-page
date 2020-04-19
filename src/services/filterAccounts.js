export const filterAccountsByID = (accountsArr, id) => {
  const filteredAccounts = accountsArr.filter(account => {
    const userInputID = id.toLowerCase();
    const accountID = account.id.toLowerCase();

    return accountID.includes(userInputID);
  });

  return filteredAccounts;
};

export const filterAccountsByName = (accountsArr, name) => {
  const filteredAccounts = accountsArr.filter(account => {
    const userInputName = name.toLowerCase();
    const accountName = account.name.toLowerCase();

    return accountName.includes(userInputName);
  });

  return filteredAccounts;
};

export const filterAccountsByNameAndID = (name, id, accountsArr) => {
  const accountsFilteredByName = filterAccountsByName(accountsArr, name);

  return filterAccountsByID(accountsFilteredByName, id);
};
