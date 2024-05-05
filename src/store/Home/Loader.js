// commonReducer.js
import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  isLoading: false,
};

const loaderSlice = createSlice({
  name: "common",
  initialState: INITIAL_STATE,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    stopLoading: (state) => {
      state.isLoading = false;
    },
  },
});

export const { startLoading, stopLoading } = loaderSlice.actions;
export const loaderReducer = loaderSlice.reducer;
