import { combineReducers } from "@reduxjs/toolkit";
import { productsReducer } from "./Home/productReducer";
import { adhocReducer } from "./Home/adhocReducer";
import { searchReducer } from "./Home/Search/searchReducer";
import notificationReducer from "./Home/notificationReducer";
import { userReducer } from "./Home/userReducer";
import { authReducer } from "./Home/authReducer";
import { uploadsReducer } from "./Home/uploadsReducer";
import {loaderReducer } from "./Home/Loader"; 

export const rootReducer = combineReducers({
  products: productsReducer,
  adhoc: adhocReducer,
  search: searchReducer,
  notification: notificationReducer,
  user: userReducer,
  auth: authReducer,
  uploads: uploadsReducer,
  common: loaderReducer
});
