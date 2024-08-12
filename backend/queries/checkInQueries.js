const insertPersonQuery = ({
  firstName,
  lastName,
  dateOfBirth,
  gender,
  address,
}) => `
INSERT INTO person (firstname, lastname, date_of_birth, gender, address)
  VALUES ('${firstName}', '${lastName}', '${dateOfBirth}', '${gender}', '${address}')
  RETURNING id;
`;

const insertHealthCardInfoQuery = ({ healthCardNumber, personID }) => `
INSERT INTO health_card_info (person_id, health_card_number)
  VALUES (${personID}, '${healthCardNumber}');
`;

const insertContactInfoQuery = ({
  personID,
  primaryPhoneNumber,
  secondaryPhoneNumber,
  emergencyContact,
  emergencyContactRelationship,
  email,
}) => `
INSERT INTO contact_info (person_id, primary_phone_number, secondary_phone_number, emergency_contact, emergency_contact_relationship, email)
  VALUES (${personID}, '${primaryPhoneNumber}', '${secondaryPhoneNumber}', '${emergencyContact}', '${emergencyContactRelationship}', '${email}');
`;

const insertMedicalHistoryQuery = ({
  personID,
  currentMedications,
  allergies,
  chronicConditions,
}) => `
INSERT INTO medical_history (person_id, current_medications, allergies, chronic_conditions)
  VALUES (${personID}, '${currentMedications}', '${allergies}','${chronicConditions}');
`;

const insertPatientVisitInfoQuery = ({
  personID,
  reasonForVisit,
  patientPainRating,
  symptoms,
}) => `
INSERT INTO patient_visit_info (person_id, reason_for_visit, patient_pain_rating, symptoms)
  VALUES (${personID}, '${reasonForVisit}', '${patientPainRating}','${symptoms}');
`;

const getPersonByHealthCardNumberQuery = (healthCardNumber) => `
SELECT person_id
  FROM health_card_info
  WHERE health_card_number = '${healthCardNumber}';
`;

export {
  insertPersonQuery,
  insertHealthCardInfoQuery,
  insertContactInfoQuery,
  insertMedicalHistoryQuery,
  insertPatientVisitInfoQuery,
  getPersonByHealthCardNumberQuery,
};
