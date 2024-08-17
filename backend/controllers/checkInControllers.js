import asyncHandler from "express-async-handler";
import { pool } from "../config/dbConfig.js";
import {
  insertPersonQuery,
  insertHealthCardInfoQuery,
  insertContactInfoQuery,
  insertMedicalHistoryQuery,
  insertPatientVisitInfoQuery,
  getPersonByHealthCardNumberQuery,
  getPatientInfoQuery,
} from "../queries/checkInQueries.js";

export const submitTriageCheckIn = asyncHandler(async (req, res) => {
  const checkInData = await req.body;
  const patientInfo = checkInData.patientInfo;
  const visitInfo = checkInData.visitInfo;
  const client = await pool.connect();

  try {
    await client.query("BEGIN");
    let resolve = await client.query(getPersonByHealthCardNumberQuery, [
      patientInfo.healthCardInfo.healthCardNumber,
    ]);

    let patientID = resolve.rows[0]?.person_id || null;

    if (!patientID) {
      resolve = await client.query(insertPersonQuery, [
        patientInfo.firstName,
        patientInfo.lastName,
        patientInfo.dateOfBirth,
        patientInfo.gender,
        patientInfo.address,
      ]);
      patientID = resolve.rows[0].id;

      resolve = await client.query(insertHealthCardInfoQuery, [
        patientID,
        patientInfo.healthCardInfo.healthCardNumber,
      ]);
    }

    resolve = await client.query(insertContactInfoQuery, [
      patientID,
      patientInfo.contactInformation.primaryPhoneNumber,
      patientInfo.contactInformation.secondaryPhoneNumber,
      patientInfo.contactInformation.emergencyContact,
      patientInfo.contactInformation.emergencyContactRelationship,
      patientInfo.contactInformation.email,
    ]);

    resolve = await client.query(insertMedicalHistoryQuery, [
      patientID,
      visitInfo.medicalHistory.currentMedications.join(", "),
      visitInfo.medicalHistory.allergies,
      visitInfo.medicalHistory.chronicConditions,
    ]);

    resolve = await client.query(insertPatientVisitInfoQuery, [
      patientID,
      visitInfo.reasonForVisit,
      visitInfo.patientPainRating,
      visitInfo.symptoms.join(", "),
    ]);

    await client.query("COMMIT");

    console.log(`Triage submitted for patient id: ${patientID}`);
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

export const getPatientInfoByHealthCardNumber = asyncHandler(
  async (req, res) => {
    const healthCardNumber = await req.query.healthCardNumber;
    const client = await pool.connect();

    try {
      let resolve = await client.query(getPersonByHealthCardNumberQuery, [
        healthCardNumber,
      ]);

      const patientID = resolve.rows[0]?.person_id || null;
      console.log(patientID)

      if (patientID) {
        resolve = await client.query(getPatientInfoQuery, [patientID]);
        console.log(resolve.rows[0]);
      }

      res.status(200).json({ message: "Check-in data submitted successfully" });
    } catch (err) {
      console.log("Database Error", err);
      res.status(500).json({ message: "Internal server error" });
    } finally {
      client.release();
    }
  }
);
