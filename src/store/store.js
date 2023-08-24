import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import logger from "redux-logger";
import resetReducer from "./Home/resetReducer";

const environmentName = "development";
// process.env.REACT_APP_ENV
const middleWares = [environmentName === "development" && logger].filter(
  Boolean
);

export const store = configureStore({
  reducer: rootReducer,
  reset: resetReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middleWares),
});
