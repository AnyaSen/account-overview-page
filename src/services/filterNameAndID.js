export const filterByNameAndID = (arrFilteredByName, arrFilteredByID) => {
  const filteredAccounts = arrFilteredByID.filter(account => {
    return arrFilteredByName.includes(account);
  });
  return filteredAccounts;
};
