import { userListTableConfig } from "../../assets/configuration/tables";
import PageTitle from "../../components/pageTitle/pageTitle";
import TableView from "../../components/table/tableView";
import { useSelector, useDispatch } from "react-redux";
import CardView from "../../components/card/cardView";
import ReorderIcon from "@mui/icons-material/Reorder";
import AppsIcon from "@mui/icons-material/Apps";
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

  const getIconList = () => {
    if (viewType !== "cardView") {
      return [{ icon: AppsIcon, clickParam: "cardView" }];
    }
    return [{ icon: ReorderIcon, clickParam: "tableView" }];
  };

  return (
    <Box className="main-container">
      <PageTitle
        data={{
          title: "users_display_title",
          subtitle: "users_display_subtitle",
          icons: getIconList(),
        }}
      />
      {viewType === "tableView" ? (
        <TableView rowData={data.slice()} tableConfig={userListTableConfig} />
      ) : (
        <Grid container spacing={3}>
          {data.map((user) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
              <CardView data={user} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}

export default UserListComponent;
