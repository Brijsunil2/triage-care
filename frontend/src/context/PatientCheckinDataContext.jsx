import React, { createContext, useState } from "react";
import { initialCheckinData } from "../models/checkinDataSchemas";

export const PatientCheckinDataContext = createContext();

export const PatientCheckinDataProvider = ({ children }) => {
  const [checkinData, setCheckinData] = useState({ ...initialCheckinData });

  return (
    <PatientCheckinDataContext.Provider value={{ checkinData, setCheckinData }}>
      {children}
    </PatientCheckinDataContext.Provider>
  );
};
