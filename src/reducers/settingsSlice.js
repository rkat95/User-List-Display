import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "en",
  viewType: "cardView",
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setViewType: (state, action) => {
      state.viewType = action.payload;
    },
    changeLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setViewType, changeLanguage } = settingsSlice.actions;

export default settingsSlice.reducer;
