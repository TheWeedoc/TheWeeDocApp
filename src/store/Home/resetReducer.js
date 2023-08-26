import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { resetUser } from "./userReducer";
import { resetAuth } from "./authReducer";

export const resetAllState = createAsyncThunk(
  "reset/resetAllState",
  async (_, thunkAPI) => {
    try {
      await thunkAPI.dispatch(resetUser());
      await thunkAPI.dispatch(resetAuth());
    } catch (err) {
      console.log(err);
    }
  }
);

const resetSlice = createSlice({
  name: "reset",
  initialState: {},
  extraReducers: (builder) => {
    builder
      .addCase(resetAllState.fulfilled, (state) => {
        return state;
      })
      .addCase(resetAllState.rejected, (state) => {
        return state;
      });
  },
});

export default resetSlice.reducer;
