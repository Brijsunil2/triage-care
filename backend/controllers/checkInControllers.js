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
  const patientInfo = checkInData.patientInfo;
  const visitInfo = checkInData.visitInfo;
  const client = await pool.connect();

  try {
    await client.query("BEGIN");
    let res = await client.query(getPersonByHealthCardNumberQuery, [
      patientInfo.healthCardInfo.healthCardNumber,
    ]);

    let patientID = res.rows[0]?.person_id || null;

    if (!patientID) {
      res = await client.query(insertPersonQuery, [
        patientInfo.firstName,
        patientInfo.lastName,
        patientInfo.dateOfBirth,
        patientInfo.gender,
        patientInfo.address,
      ]);
      patientID = res.rows[0].id;

      res = await client.query(insertHealthCardInfoQuery, [
        patientID,
        patientInfo.healthCardInfo.healthCardNumber,
      ]);
    }

    res = await client.query(insertContactInfoQuery, [
      patientID,
      patientInfo.contactInformation.primaryPhoneNumber,
      patientInfo.contactInformation.secondaryPhoneNumber,
      patientInfo.contactInformation.emergencyContact,
      patientInfo.contactInformation.emergencyContactRelationship,
      patientInfo.contactInformation.email,
    ]);

    res = await client.query(insertMedicalHistoryQuery, [
      patientID,
      visitInfo.medicalHistory.currentMedications.join(", "),
      visitInfo.medicalHistory.allergies,
      visitInfo.medicalHistory.chronicConditions,
    ]);

    res = await client.query(insertPatientVisitInfoQuery, [
      patientID,
      visitInfo.reasonForVisit,
      visitInfo.patientPainRating,
      visitInfo.symptoms.join(", "),
    ]);

    await client.query("COMMIT");

    console.log(`Triage submitted for patient id: ${patientID}`)
  } catch (err) {
    console.log("Database Error", err);
    await client.query("ROLLBACK");
    res
      .status(500)
      .json({ message: "Internal server error, data was not submitted" });
  } finally {
    client.release();
    res.status(200).json({ message: "Check-in data submitted successfully" });
  }
});