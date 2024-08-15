import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { initialCheckinData } from "../models/checkinDataSchemas";
import { apiSlice } from "./apiSlice";

const checkInDataAdaptor = createEntityAdapter({});

const initialState = checkInDataAdaptor.getInitialState({
  checkInData: { ...initialCheckinData },
  status: "idle",
  error: null,
});

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
  }),
});

export const { useSubmitCheckInDataMutation } = checkInDataApiSlice;

export const getCheckInData = (state) => state.checkInData.checkInData;

export const getPatientInfo = createSelector(
  [getCheckInData],
  (checkInData) => checkInData.patientInfo
);

export const getVisitInfo = createSelector(
  [getCheckInData],
  (checkInData) => checkInData.visitInfo
);

export const { updatePatientInfo, updateVisitInfo, reset } = checkInDataSlice.actions;

export default checkInDataSlice.reducer;
