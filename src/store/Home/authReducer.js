import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getlogin } from "../../Api/Fetchclient";
import { resetAllState } from "./resetReducer";

const INITIAL_STATE = {
  isLoading: false,
  isLoggedIn: false,
};

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function deleteCookie(name) {
  var d = new Date();
  d.setTime(d.getTime() - 60 * 60 * 1000);
  var expires = "expires=" + d.toGMTString();
  document.cookie = name + "=;" + expires + ";path=/";
}

export const postLogin = createAsyncThunk(
  "auth/postLogin",
  async (data, thunkAPI) => {
    try {
      const result = await getlogin(data);
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

export const checkAuth = createAsyncThunk(
  "auth/checkAuth",
  async (_, thunkAPI) => {
    try {
      const result = await getCookie("token");
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

export const logout = createAsyncThunk("auth/logout", (_, { dispatch }) => {
  dispatch(resetAllState());
  deleteCookie("token");
  return false;
});

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  resucer: {
    resetAuth: () => INITIAL_STATE,
  },
  extraReducers: (builder) => {
    builder.addCase(postLogin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(postLogin.fulfilled, (state, action) => {
      if (action.payload.status === 200) {
        setCookie("token", action.payload?.data?.token, 6);
        state.isLoggedIn = true;
      }
      state.isLoading = false;
    });
    builder.addCase(postLogin.rejected, (state) => {
      state.isLoading = false;
      state.isLoggedIn = false;
    });
    // Check Auth
    builder.addCase(checkAuth.fulfilled, (state, action) => {
      if (action.payload !== "") {
        state.isLoggedIn = true;
      }
    });
    builder.addCase(checkAuth.rejected, (state) => {
      state.isLoggedIn = false;
    });
    // Logout
    builder.addCase(logout.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = false;
    });
  },
});

export const { resetAuth } = authSlice.actions;

export const authReducer = authSlice.reducer;
