import asyncHandler from "express-async-handler";
import { pool } from "../config/dbConfig.js";
import {
  insertPersonQuery,
  insertHealthCardInfoQuery,
  insertContactInfoQuery,
  insertMedicalHistoryQuery,
  insertPatientVisitInfoQuery,
  getPersonByHealthCardNumberQuery,
} from "../queries/checkInQueries.js";

export const submitTriageCheckIn = asyncHandler(async (req, res) => {
  const checkInData = await req.body;
  const client = await pool.connect();
  
  try {
    let res = await client.query(
      getPersonByHealthCardNumberQuery(
        checkInData.patientInfo.healthCardInfo.healthCardNumber
      )
    );
    console.log(res.rows);

    if (res.rows.length === 0) {
      res = await client.query(insertPersonQuery(checkInData.patientInfo));
      const patientID = res.rows[0].id

    }

  } catch (err) {
    console.log("Database Error", err);
    res
      .status(500)
      .json({ message: "Internal server error, data was not submitted" });

  } finally {
    client.release();
    res.status(200).json({ message: "Check-in data submitted successfully" });
  }
});

// {
//   [0]   patientInfo: {
//   [0]     healthCardInfo: { healthCardNumber: '2312-312-321-DS' },
//   [0]     firstName: 'John',
//   [0]     lastName: 'Doe',
//   [0]     dateOfBirth: '2024-07-28',
//   [0]     gender: 'Male',
//   [0]     address: '2401 City Park Dr',
//   [0]     contactInformation: {
//   [0]       primaryPhoneNumber: '+1 682-098-0454',
//   [0]       secondaryPhoneNumber: '',
//   [0]       emergencyContact: '+1 654-656-5646',
//   [0]       emergencyContactRelationship: '',
//   [0]       email: '123john@test.ca'
//   [0]     }
//   [0]   },
//   [0]   visitInfo: {
//   [0]     reasonForVisit: 'c',
//   [0]     patientPainRating: 4,
//   [0]     symptoms: [],
//   [0]     medicalHistory: { currentMedications: [], allergies: '', chronicConditions: '' }
//   [0]   },
//   [0]   patientAcknowledgement: '2024-08-11T21:41:46.254Z'
//   [0] }
