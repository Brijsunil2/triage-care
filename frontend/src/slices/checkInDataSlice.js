import { createSlice } from "@reduxjs/toolkit";
import { initialCheckinData } from "../models/checkinDataSchemas";

const initialState = { checkInData: { ...initialCheckinData } };

export const checkInDataSlice = createSlice({
  name: "checkInData",
  initialState,
  reducers: {
    updatePatientInfo: (state, action) => {
      state.checkInData.patientInfo = action.payload.patientInfo;
    },
    updateVisitInfo: (state, action) => {
      state.checkInData.visitInfo = action.payload.visitInfo;
    },
    submitCheckInData: (state) => {
      state.checkInData.acceptTermsAndConditions = new Date();
      state.checkInData = { ...initialCheckinData };
    },
  },
});

export const getPatientInfo = (state) => state.checkInData.patientInfo;
export const getVisitInfo = (state) => state.checkInData.visitInfo;

export const {
  updatePatientInfo,
  updateVisitInfo,
  submitCheckInData,
  resetCheckInData,
} = checkInDataSlice.actions;

export default checkInDataSlice.reducer;
