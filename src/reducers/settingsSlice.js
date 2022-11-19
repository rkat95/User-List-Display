import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "",
  viewType: "cardView",
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setViewType: (state, action) => {
      state.viewType = action.payload;
    },
  },
});

export const { setViewType } = settingsSlice.actions;

export default settingsSlice.reducer;
