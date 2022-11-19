import { userListTableConfig } from "../../assets/configuration/tables";
import TableView from "../../components/table/tableView";
import { useSelector, useDispatch } from "react-redux";
import CardView from "../../components/card/cardView";
import { getUsersList } from "./usersSlice";
import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import "./usersList.scss";

export function UserListComponent() {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.users);

  const { viewType } = useSelector((state) => state.settings);

  useEffect(() => {
    dispatch(getUsersList());
  }, [dispatch]);

  return (
    <Box className="main-container">
      {/* {<TableView rowData={data.slice()} tableConfig={userListTableConfig} />} */}
      <Grid container spacing={3}>
        {data.map((user) => (
          <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
            <CardView data={user} />
          </Grid>
        ))}{" "}
      </Grid>
    </Box>
  );
}

export default UserListComponent;
