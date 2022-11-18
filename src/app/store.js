import { configureStore } from "@reduxjs/toolkit";
import userListReducer from "../features/users/usersSlice";
import settingsSlice from "../reducers/settingsSlice";

export const store = configureStore({
  reducer: { users: userListReducer, settings: settingsSlice },
});
