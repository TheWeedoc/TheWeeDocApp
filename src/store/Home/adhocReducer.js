import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GetGenres } from "../../Api/Fetchclient";

const INITIAL_STATE = {
  isLoading: false,
  genres: [],
};

export const getGenres = createAsyncThunk(
  "adhoc/getGenres",
  async (_, thunkAPI) => {
    try {
      const result = await GetGenres();
      return result;
    } catch (err) {
      const message =
        (err.response && err.response.data && err.response.data.detail) ||
        err.message ||
        err.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

const adhocSlice = createSlice({
  name: "adhoc",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder.addCase(getGenres.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getGenres.fulfilled, (state, action) => {
      state.genres = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getGenres.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const adhocReducer = adhocSlice.reducer;
