import { combineReducers } from "@reduxjs/toolkit";
import { productsReducer } from "./Home/productReducer";

export const rootReducer = combineReducers({
  products: productsReducer,
});
