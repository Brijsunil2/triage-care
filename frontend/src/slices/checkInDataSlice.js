import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { initialCheckinData } from "../models/checkinDataSchemas";

const CHECK_IN_DATA_URL = "http://localhost:4000/checkInData";

const initialState = {
  checkInData: { ...initialCheckinData },
  status: "idle",
  error: null,
};

export const submitCheckInData = createAsyncThunk(
  "checkInData",
  async (checkInData) => {
    const res = await fetch(CHECK_IN_DATA_URL, {
      method: "POST",
      body: JSON.stringify({ ...checkInData, patientAcknowledgement: new Date().toISOString() }),
    });

    return res.data;
  }
);

export const checkInDataSlice = createSlice({
  name: "checkInData",
  initialState,
  reducers: {
    updatePatientInfo(state, action) {
      state.checkInData.patientInfo = action.payload.patientInfo;
    },
    updateVisitInfo(state, action) {
      state.checkInData.visitInfo = action.payload.visitInfo;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(submitCheckInData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(submitCheckInData.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log(action.payload);
        state.checkInData = { ...initialCheckinData };
      })
      .addCase(submitCheckInData.rejected, (state, action) => {
        state.status = "failed";
        console.log(action.error.message);
        state.checkInData = { ...initialCheckinData };
      });
  },
});

export const getPatientInfo = (state) => state.checkInData.patientInfo;
export const getVisitInfo = (state) => state.checkInData.visitInfo;
export const getCheckInData = (state) => state.checkInData;

export const { updatePatientInfo, updateVisitInfo, resetCheckInData } =
  checkInDataSlice.actions;

export default checkInDataSlice.reducer;
