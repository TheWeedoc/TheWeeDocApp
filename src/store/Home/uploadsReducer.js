import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  GetMovieReviews,
  UploadsAprroved,
  UploadsRejected,
  UploadsVerification,
} from "../../Api/Fetchclient";

const INITIAL_STATE = {
  isLoading: false,
  approved: {
    count: 0,
    next: null,
    previous: null,
    results: [],
  },
  rejected: {
    count: 0,
    next: null,
    previous: null,
    results: [],
  },
  verification: {
    count: 0,
    next: null,
    previous: null,
    results: [],
  },
  movieReview: [],
};

export const uploadsApproved = createAsyncThunk(
  "uploads/uploadsApproved",
  async (_, thunkAPI) => {
    try {
      const result = await UploadsAprroved();
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

export const uploadsVerification = createAsyncThunk(
  "uploads/uploadsVerification",
  async (_, thunkAPI) => {
    try {
      const result = await UploadsVerification();
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

export const uploadsRejected = createAsyncThunk(
  "uploads/uploadsRejected",
  async (_, thunkAPI) => {
    try {
      const result = await UploadsRejected();
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

export const getMovieReview = createAsyncThunk(
  "uploads/getMovieReview",
  async (id, thunkAPI) => {
    try {
      const result = await GetMovieReviews(id);
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

const uploadsSlice = createSlice({
  name: "uploads",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    // Approved
    builder.addCase(uploadsApproved.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(uploadsApproved.fulfilled, (state, action) => {
      state.approved.count = action.payload.count;
      state.approved.next = action.payload.next;
      state.approved.previous = action.payload.previous;
      state.approved.results = action.payload.results;
      state.isLoading = false;
    });
    builder.addCase(uploadsApproved.rejected, (state) => {
      state.isLoading = false;
    });
    // Pending
    builder.addCase(uploadsVerification.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(uploadsVerification.fulfilled, (state, action) => {
      state.verification.count = action.payload.count;
      state.verification.next = action.payload.next;
      state.verification.previous = action.payload.previous;
      state.verification.results = action.payload.results;
      state.isLoading = false;
    });
    builder.addCase(uploadsVerification.rejected, (state) => {
      state.isLoading = false;
    });

    //   Rejected
    builder.addCase(uploadsRejected.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(uploadsRejected.fulfilled, (state, action) => {
      state.rejected.count = action.payload.count;
      state.rejected.next = action.payload.next;
      state.rejected.previous = action.payload.previous;
      state.rejected.results = action.payload.results;
      state.isLoading = false;
    });
    builder.addCase(uploadsRejected.rejected, (state) => {
      state.isLoading = false;
    });

    // Movie Review
    builder.addCase(getMovieReview.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMovieReview.fulfilled, (state, action) => {
      state.movieReview = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getMovieReview.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const uploadsReducer = uploadsSlice.reducer;
