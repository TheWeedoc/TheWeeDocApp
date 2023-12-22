// commonReducer.js
import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  isLoading: false,
};

const commonSlice = createSlice({
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

export const { startLoading, stopLoading } = commonSlice.actions;
export const commonReducer = commonSlice.reducer;
