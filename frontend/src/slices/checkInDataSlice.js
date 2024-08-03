import { createSlice } from "@reduxjs/toolkit";
import { initialCheckinData } from "../models/checkinDataSchemas";

const initialState = { ...initialCheckinData };

export const checkInDataSlice = createSlice({
  name: "checkInData",
  initialState,
  reducers: {
    updatePatientInfo: (state, action) => {
      state.patientInfo = action.payload.patientInfo;
    },
    updateVisitInfo: (state, action) => {
      state.visitInfo = action.payload.visitInfo;
    },
    submitCheckInData: (state) => {
      state.acceptTermsAndConditions = new Date();
    },
    resetCheckInData: (state) => (state = { ...initialCheckinData }),
  },
});

export const { updatePatientInfo, updateVisitInfo, resetCheckInData } =
  checkInDataSlice.actions;

export default checkInDataSlice.reducer;
