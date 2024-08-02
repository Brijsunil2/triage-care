import { configureStore } from "@reduxjs/toolkit";
import checkInDataReducer from "./slices/checkInDataSlice";

export const store = configureStore({
  reducer: {
    checkInData: checkInDataReducer,
  },
  devTools: true,
});
