import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GetSearchFilms, GetSearchUsers } from "../../../Api/Fetchclient";

const INITIAL_STATE = {
  isLoading: false,
  searchFilmResults: {
    count: 0,
    next: null,
    previous: null,
    results: [],
    message: "",
  },
  searchUserResults: {
    count: 0,
    next: null,
    previous: null,
    results: [],
    message: "",
  },
};

let controller = new AbortController();

export const getSearchFilms = createAsyncThunk(
  "search/getSearchFilms",
  async (query, thunkAPI) => {
    if (controller) {
      controller.abort();
    }
    controller = new AbortController();
    const signal = controller.signal;
    try {
      const result = await GetSearchFilms(query, signal);
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

export const getSearchUsers = createAsyncThunk(
  "search/getSearchUsers",
  async (query, thunkAPI) => {
    if (controller) {
      controller.abort();
    }
    controller = new AbortController();
    const signal = controller.signal;
    try {
      const result = await GetSearchUsers(query, signal);
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

const searchSlice = createSlice({
  name: "search",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder.addCase(getSearchFilms.pending, (state) => {
      state.isLoading = true;
      state.searchFilmResults.message = "";
    });
    builder.addCase(getSearchFilms.fulfilled, (state, action) => {
      //   state.searchFilmResults = action.payload;
      if (action.payload?.count === 0)
        state.searchFilmResults.message = "No Results Found";
      state.searchFilmResults.count = action.payload.count;
      state.searchFilmResults.next = action.payload.next;
      state.searchFilmResults.previous = action.payload.previous;
      state.searchFilmResults.results = action.payload.results;
      state.isLoading = false;
    });
    builder.addCase(getSearchFilms.rejected, (state) => {
      state.isLoading = false;
      state.searchFilmResults.message = "";
    });
    builder.addCase(getSearchUsers.pending, (state) => {
      state.isLoading = true;
      state.searchUserResults.message = "";
      state.searchUserResults.count = 0;
    });
    builder.addCase(getSearchUsers.fulfilled, (state, action) => {
      //   state.searchFilmResults = action.payload;
      if (action.payload?.count === 0)
        state.searchUserResults.message = "No Results Found";
      state.searchUserResults.count = action.payload.count;
      state.searchUserResults.next = action.payload.next;
      state.searchUserResults.previous = action.payload.previous;
      state.searchUserResults.results = action.payload.results;
      state.isLoading = false;
    });
    builder.addCase(getSearchUsers.rejected, (state) => {
      state.isLoading = false;
      state.searchUserResults.message = "";
    });
  },
});

export const searchReducer = searchSlice.reducer;
