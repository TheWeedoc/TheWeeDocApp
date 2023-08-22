import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  AddReview,
  DisikeFilm,
  GetProduct,
  GetProductCustomer,
  GetProductDetails,
  LikeFilm,
  SaveFilm,
} from "../../Api/Fetchclient";
import { showNotification } from "./notificationReducer";

const INITIAL_STATE = {
  isLoading: false,
  productDetails: "",
  productCustomer: "",
  products: [],
  count: "",
  next: "",
  previous: "",
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, thunkAPI) => {
    try {
      const result = await GetProduct();
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

export const getProductDetails = createAsyncThunk(
  "products/getProductDetails",
  async (id, thunkAPI) => {
    try {
      const result = await GetProductDetails(id);
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

export const getProductCustomer = createAsyncThunk(
  "products/getProductCustomer",
  async ({ name, id }, thunkAPI) => {
    try {
      const result = await GetProductCustomer(name, id);
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

export const saveFilm = createAsyncThunk(
  "products/saveFilm",
  async (id, thunkAPI) => {
    try {
      const result = await SaveFilm(id);
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

export const likeFilm = createAsyncThunk(
  "products/likeFilm",
  async (id, thunkAPI) => {
    try {
      const result = await LikeFilm(id);
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

export const disLikeFilm = createAsyncThunk(
  "products/disLikeFilm",
  async (id, thunkAPI) => {
    try {
      const result = await DisikeFilm(id);
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

export const addReview = createAsyncThunk(
  "products/addReview",
  async ({ id, review }, { dispatch }) => {
    try {
      const result = await AddReview(id, review);
      if (result.status === 200)
        dispatch(
          showNotification({
            type: "success",
            message: "Review posted successfully.",
          })
        );
      return result;
    } catch (err) {
      dispatch(
        showNotification({
          type: "error",
          message: "Error while posting review",
        })
      );
    }
  }
);
const productSlice = createSlice({
  name: "products",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload.results;
      state.count = action.payload.count;
      state.next = action.payload.next;
      state.previous = action.payload.previous;
      state.isLoading = false;
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getProductDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProductDetails.fulfilled, (state, action) => {
      state.productDetails = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getProductDetails.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getProductCustomer.pending, (state, action) => {
      state.productCustomer = "";
    });
    builder.addCase(getProductCustomer.fulfilled, (state, action) => {
      state.productCustomer = action.payload;
    });
    builder.addCase(saveFilm.fulfilled, (state, action) => {
      if (action.payload.sucess === "movie saved sucessfully")
        state.productCustomer.isSaved = true;
      if (action.payload.sucess === "movie removed sucessfully")
        state.productCustomer.isSaved = false;
    });
    builder.addCase(likeFilm.fulfilled, (state, action) => {
      state.productDetails.has_liked = action.payload.has_liked;
      state.productDetails.has_disliked = action.payload.has_disliked;
      state.productDetails.like_count = action.payload.like_count;
      state.productDetails.dislike_count = action.payload.dislike_count;
    });
    builder.addCase(disLikeFilm.fulfilled, (state, action) => {
      state.productDetails.has_liked = action.payload.has_liked;
      state.productDetails.has_disliked = action.payload.has_disliked;
      state.productDetails.like_count = action.payload.like_count;
      state.productDetails.dislike_count = action.payload.dislike_count;
    });
  },
});
export const productsReducer = productSlice.reducer;
