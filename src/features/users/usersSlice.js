import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../../services/api";

const initialState = {
  data: [],
  status: "idle",
  error: null,
  selectedUser: {},
};

export const getUsersList = createAsyncThunk("userList/getUsers", async () => {
  const response = await getUsers();
  return response;
});

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsersList.pending, (state, action) => {
      if (state.status === "idle") {
        state.status = "pending";
        state.error = "";
      }
    });
    builder.addCase(getUsersList.fulfilled, (state, action) => {
      if (state.status === "pending") {
        state.data = action.payload;
        state.error = "";
        state.status = "idle";
      }
    });

    builder.addCase(getUsersList.rejected, (state, action) => {
      if (state.status === "pending") {
        state.status = "idle";
        state.error = "failed_fetch_data"; //TODO localize error message
      }
    });
  },
});

export const { setSelectedUser } = usersSlice.actions;

export default usersSlice.reducer;
