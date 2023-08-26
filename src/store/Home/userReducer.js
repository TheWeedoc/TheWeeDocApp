import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  GetAllReviews,
  GetAllSavedFilms,
  GetUser,
  OtherUserProfile,
  UpdateUser,
} from "../../Api/Fetchclient";
import { showNotification } from "./notificationReducer";

const INITIAL_STATE = {
  isLoading: false,
  user: "",
  reviewsGiven: [],
  savedFilms: [],
  otherUser: "",
};

export const getUser = createAsyncThunk("user/getUser", async (_, thunkAPI) => {
  try {
    const result = await GetUser();

    let extractedObject;

    if (
      Array.isArray(result) &&
      result.length === 1 &&
      typeof result[0] === "object"
    ) {
      extractedObject = result[0];
    } else if (typeof result === "object") {
      extractedObject = result;
    }
    return extractedObject;
  } catch (err) {
    const message =
      (err.response && err.response.data && err.response.data.detail) ||
      err.message ||
      err.toString();

    return thunkAPI.rejectWithValue(message);
  }
});

export const getAllReviews = createAsyncThunk(
  "user/getAllReviews",
  async (_, thunkAPI) => {
    try {
      const result = await GetAllReviews();

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

export const getAllSavedFilms = createAsyncThunk(
  "user/getAllSavedFilms",
  async (_, thunkAPI) => {
    try {
      const result = await GetAllSavedFilms();

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

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (formData, { dispatch }) => {
    try {
      const result = await UpdateUser(formData);
      if (result.status === 200)
        dispatch(
          showNotification({
            type: "success",
            message: "Profile information updated successfully.",
          })
        );
      return result.data;
    } catch (err) {
      dispatch(
        showNotification({
          type: "error",
          message: "Error updating user details",
        })
      );
    }
  }
);

export const otherUserProfile = createAsyncThunk(
  "user/otherUserProfile",
  async (id, thunkAPI) => {
    try {
      const result = await OtherUserProfile(id);
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

const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    resetUser: () => INITIAL_STATE,
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getUser.rejected, (state) => {
      state.isLoading = false;
    });
    // Other User Profile get
    builder.addCase(otherUserProfile.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(otherUserProfile.fulfilled, (state, action) => {
      state.otherUser = action.payload;
      state.isLoading = false;
    });
    builder.addCase(otherUserProfile.rejected, (state) => {
      state.isLoading = false;
    });
    // Get All Reviews
    builder.addCase(getAllReviews.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllReviews.fulfilled, (state, action) => {
      state.reviewsGiven = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getAllReviews.rejected, (state) => {
      state.isLoading = false;
    });

    // Get All Saved Films
    builder.addCase(getAllSavedFilms.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllSavedFilms.fulfilled, (state, action) => {
      state.savedFilms = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getAllSavedFilms.rejected, (state) => {
      state.isLoading = false;
    });

    // User Update
    builder.addCase(updateUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      if (action.payload.first_name) {
        state.user.first_name = action.payload.first_name;
      }
      if (action.payload.last_name) {
        state.user.last_name = action.payload.last_name;
      }
      if (action.payload.designation) {
        state.user.designation = action.payload.designation;
      }
      if (action.payload.profile_pic) {
        state.user.profile_pic = action.payload.profile_pic;
      }
      state.isLoading = false;
    });
    builder.addCase(updateUser.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { resetUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
