export const userListTableConfig = {
  defaultColDef: {
    width: 150,
    filter: true,
    sortable: true,
  },
  columnDefs: [
    {
      field: "name",
      headerName: "name",
      width: 170,
    },
    { field: "username", headerName: "username" },
    { field: "email", headerName: "email", width: 200 },
    { field: "phone", headerName: "phone", width: 200 },
    {
      field: "address.city",
      headerName: "city",
      nested: "address",
    },
    {
      field: "company.name",
      headerName: "company",
      nested: "company",
    },
  ],
};
