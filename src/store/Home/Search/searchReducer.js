import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  FollowUser,
  GetMyProfileSearch,
  GetSearchFilms,
  GetSearchUsers,
} from "../../../Api/Fetchclient";

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
  searchMyProfileResults: {
    results: [],
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

export const getMyProfileSearch = createAsyncThunk(
  "search/getMyProfileSearch",
  async (query, thunkAPI) => {
    if (controller) {
      controller.abort();
    }
    controller = new AbortController();
    const signal = controller.signal;
    try {
      const result = await GetMyProfileSearch(query, signal);
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

export const followUserSearch = createAsyncThunk(
  "search/followUserSearch",
  async (id, thunkAPI) => {
    try {
      const result = await FollowUser(id);
      result.username = id;
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

    // Get Search Results for Myprofile page
    builder.addCase(getMyProfileSearch.fulfilled, (state, action) => {
      if (action.payload?.length > 0)
        state.searchMyProfileResults.results = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getMyProfileSearch.rejected, (state) => {
      state.isLoading = false;
    });
    // Follow User
    builder.addCase(followUserSearch.fulfilled, (state, action) => {
      const indexValueofID = state.searchUserResults.results.findIndex(
        (item) => item.username === action.payload.username
      );
      if (action.payload?.sucess === "unfollowed") {
        state.searchUserResults.results[indexValueofID].is_following = false;
      } else if (action.payload?.sucess === "followed") {
        state.searchUserResults.results[indexValueofID].is_following = true;
      }
    });
    builder.addCase(followUserSearch.rejected, () => {
      console.log("Follow Error");
    });
  },
});

export const searchReducer = searchSlice.reducer;
