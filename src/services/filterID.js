export const filterByID = (accountsArr, name) => {
  const filteredAccounts = accountsArr.filter(account => {
    return account.id === name.toUpperCase();
  });
  return filteredAccounts;
};
