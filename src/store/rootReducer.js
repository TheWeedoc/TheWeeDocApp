import { combineReducers } from "@reduxjs/toolkit";
import { productsReducer } from "./Home/productReducer";
import { adhocReducer } from "./Home/adhocReducer";
import { searchReducer } from "./Home/Search/searchReducer";

export const rootReducer = combineReducers({
  products: productsReducer,
  adhoc: adhocReducer,
  search: searchReducer,
});
