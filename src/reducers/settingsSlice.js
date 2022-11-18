import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "",
  viewType: "card",
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setViewType: (state, action) => {
      console.log("action", action);
      state.viewType = action.payload;
    },
  },
});

export const { setViewType } = settingsSlice.actions;

export default settingsSlice.reducer;
