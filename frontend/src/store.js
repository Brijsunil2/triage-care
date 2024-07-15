import { configureStore } from "@reduxjs/toolkit";
import checkInReducer from "./slices/checkInSlice";

const store = configureStore({
  reducer: {
    checkIn: checkInReducer,
  },
});

export default store;
