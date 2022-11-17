import { configureStore } from "@reduxjs/toolkit";
import userListReducer from "../features/users/usersSlice";

export const store = configureStore({
  reducer: { users: userListReducer },
});
