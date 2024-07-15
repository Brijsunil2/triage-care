import { createSlice } from "@reduxjs/toolkit"
import { initialCheckinData } from "../models/checkinDataSchemas"

const initialState = { ...initialCheckinData }

export const checkInSlice = createSlice({
  name: "patientCheckInData",
  initialState,
  reducers: {
    printToConsole: (state) => console.log(state)
  }
})