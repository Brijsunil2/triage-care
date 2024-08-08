import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
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

export const getPatientInfo = (state) => state.checkInData.patientInfo;
export const getVisitInfo = (state) => state.checkInData.visitInfo;
export const getCheckInData = (state) => state.checkInData;

export const { updatePatientInfo, updateVisitInfo, resetCheckInData } =
  checkInDataSlice.actions;

export default checkInDataSlice.reducer;
