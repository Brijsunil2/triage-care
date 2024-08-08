import { configureStore } from "@reduxjs/toolkit";
import checkInDataReducer from "./slices/checkInDataSlice";
import { apiSlice } from "./slices/apiSlice";

export const store = configureStore({
  reducer: {
    checkInData: checkInDataReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
