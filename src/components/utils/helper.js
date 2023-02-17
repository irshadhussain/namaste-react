export const filterData = (searchInput, restaurents) => {
  const filteredData = restaurents.filter((restaurent) => {
    return restaurent?.data?.name
      ?.toLowerCase()
      .includes(searchInput.toLowerCase());
  });

  return filteredData;
};
