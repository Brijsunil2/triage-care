import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { initialCheckinData } from "../models/checkinDataSchemas";
import { demoInitialCheckinData } from "../models/demoCheckinDataSchemas";
import { apiSlice } from "./apiSlice";

const checkInDataAdaptor = createEntityAdapter({});

const initialState = checkInDataAdaptor.getInitialState({
  checkInData:
    process.env.DEMO_MODE === "true"
      ? { ...demoInitialCheckinData }
      : { ...initialCheckinData },
  status: "idle",
  error: null,
});

export const checkInDataSlice = createSlice({
  name: "checkInData",
  initialState,
  reducers: {
    lockPatientInfo(state, action) {
      state.checkInData.patientInfo.locked = action.payload;
    },
    updatePatientInfo(state, action) {
      state.checkInData.patientInfo = action.payload;
    },
    updateContactInfo(state, action) {
      state.checkInData.contactInfo = action.payload;
    },
    updateHealthCardInfo(state, action) {
      state.checkInData.healthCardInfo = action.payload;
    },
    updateVisitInfo(state, action) {
      state.checkInData.visitInfo = action.payload;
    },
    updateMedicalHistory(state, action) {
      state.checkInData.medicalHistory = action.payload;
    },
    updateCheckInData(state, action) {
      state.checkInData = action.payload;
    },
    reset(state) {
      return initialState;
    },
  },
});

export const checkInDataApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    submitCheckInData: builder.mutation({
      query: (checkInData) => ({
        url: "/api/triage/checkin",
        method: "POST",
        body: {
          ...checkInData,
          patientAcknowledgement: new Date().toISOString(),
        },
      }),
    }),
    searchPatientByHealthCardNumber: builder.mutation({
      query: (healthCardNumber) => ({
        url: `/api/triage/checkin?healthCardNumber=${healthCardNumber}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useSubmitCheckInDataMutation,
  useSearchPatientByHealthCardNumberMutation,
} = checkInDataApiSlice;

export const getCheckInData = (state) => state.checkInData.checkInData;

export const getPatientInfo = createSelector(
  [getCheckInData],
  (checkInData) => checkInData.patientInfo
);

export const getVisitInfo = createSelector(
  [getCheckInData],
  (checkInData) => checkInData.visitInfo
);

export const getMedicalHistory = createSelector(
  [getCheckInData],
  (checkInData) => checkInData.medicalHistory
);

export const {
  lockPatientInfo,
  updatePatientInfo,
  updateContactInfo,
  updateVisitInfo,
  updateHealthCardInfo,
  updateCheckInData,
  updateMedicalHistory,
  reset,
} = checkInDataSlice.actions;

export default checkInDataSlice.reducer;
