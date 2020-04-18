export const filterByName = (accountsArr, name) => {
  const filteredAccounts = accountsArr.filter(account => {
    return account.name === name.toUpperCase();
  });
  return filteredAccounts;
};
