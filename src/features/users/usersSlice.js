import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../../services/api";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const getUsersList = createAsyncThunk(
  "userList/getUsers",
  async (amount) => {
    const response = await getUsers();
    console.log(response);
    return response;
  }
);

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsersList.pending, (state, action) => {
      if (state.status === "idle") {
        state.status = "pending";
      }
    });
    builder.addCase(getUsersList.fulfilled, (state, action) => {
      if (state.status === "pending") {
        state.data = action.payload;
        state.status = "idle";
      }
    });

    builder.addCase(getUsersList.rejected, (state, action) => {
      if (state.status === "pending") {
        state.status = "idle";
        state.error = "Error occured"; //TODO localize error message
      }
    });
  },
});

export default usersSlice.reducer;
