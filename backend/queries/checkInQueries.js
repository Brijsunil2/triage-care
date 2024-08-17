const insertPersonQuery = `
INSERT INTO person (firstname, lastname, date_of_birth, gender, address)
  VALUES ($1, $2, $3, $4, $5)
  RETURNING id;
`;

const insertHealthCardInfoQuery = `
INSERT INTO health_card_info (person_id, health_card_number)
  VALUES ($1, $2);
`;

const insertContactInfoQuery = `
INSERT INTO contact_info (person_id, primary_phone_number, secondary_phone_number, emergency_contact, emergency_contact_relationship, email)
  VALUES ($1, $2, $3, $4, $5, $6);
`;

const insertMedicalHistoryQuery = `
INSERT INTO medical_history (person_id, current_medications, allergies, chronic_conditions)
  VALUES ($1, $2, $3, $4);
`;

const insertPatientVisitInfoQuery = `
INSERT INTO patient_visit_info (person_id, reason_for_visit, patient_pain_rating, symptoms)
  VALUES ($1, $2, $3, $4);
`;

const getPersonByHealthCardNumberQuery = `
SELECT person_id
  FROM health_card_info
  WHERE health_card_number = $1;
`;

const getPatientInfoQuery = `
SELECT
  *
  FROM person p
  LEFT JOIN contact_info c ON p.id = c.person_id
  WHERE p.id = $1
`;

export {
  insertPersonQuery,
  insertHealthCardInfoQuery,
  insertContactInfoQuery,
  insertMedicalHistoryQuery,
  insertPatientVisitInfoQuery,
  getPersonByHealthCardNumberQuery,
  getPatientInfoQuery,
};

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
