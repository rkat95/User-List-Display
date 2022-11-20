import { userListTableConfig } from "../../assets/configuration/tables";
import PageTitle from "../../components/pageTitle/pageTitle";
import TableView from "../../components/table/tableView";
import { useSelector, useDispatch } from "react-redux";
import CardView from "../../components/card/cardView";
import ReorderIcon from "@mui/icons-material/Reorder";
import Loader from "../../components/loader/loader";
import AppsIcon from "@mui/icons-material/Apps";
import ErrorDisplay from "../../components/errorDisplay/errorDisplay";
import { getUsersList, setSelectedUser } from "./usersSlice";
import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import "./usersList.scss";
import { useNavigate } from "react-router-dom";
import { setViewType } from "../../reducers/settingsSlice";
import RefreshIcon from "@mui/icons-material/Refresh";

export function UserListComponent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, status, error } = useSelector((state) => state.users);
  let content;

  const { viewType } = useSelector((state) => state.settings);

  useEffect(() => {
    if (!data?.length) {
      fetchUsers();
    }
  }, [dispatch]);

  const fetchUsers = () => {
    dispatch(getUsersList());
  };
  const goToUserDetails = (user) => {
    console.log("here");
    dispatch(setSelectedUser(user));
    navigate("/user-details");
  };

  const setHeaderIcon = (view) => {
    console.log("here", view);
    dispatch(setViewType(view));
  };

  if (status === "pending") {
    content = <Loader />;
  }
  if (status === "idle") {
    content =
      viewType === "tableView" ? (
        <TableView rowData={data.slice()} tableConfig={userListTableConfig} />
      ) : (
        <Grid container spacing={3}>
          {data.map((user) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
              <div
                className="card-wrapper"
                onClick={() => goToUserDetails(user)}
              >
                <CardView data={user} />
              </div>
            </Grid>
          ))}
        </Grid>
      );
  }
  if (error) {
    content = <ErrorDisplay errorMessage={"failed_fetch_data"} />;
  }

  const getIconList = () => {
    if (viewType !== "cardView") {
      return [
        { icon: AppsIcon, clickParam: "cardView", clickFn: setHeaderIcon },
        { icon: RefreshIcon, clickFn: fetchUsers },
      ];
    }
    return [
      { icon: ReorderIcon, clickParam: "tableView", clickFn: setHeaderIcon },
      { icon: RefreshIcon, clickFn: fetchUsers },
    ];
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
      {content}
    </Box>
  );
}

export default UserListComponent;
