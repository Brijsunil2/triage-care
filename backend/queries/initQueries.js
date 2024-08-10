export const createPersonTableQuery = `
CREATE TABLE IF NOT EXISTS person (
  id SERIAL PRIMARY KEY,
  firstname VARCHAR(50) NOT NULL,
  lastname VARCHAR(50) NOT NULL,
  date_of_birth DATE NOT NULL,
  gender VARCHAR(20) NOT NULL,
  address TEXT NOT NULL
);
`;

export const createHealthCardInfoTableQuery = `
CREATE TABLE IF NOT EXISTS health_card_info (
  id SERIAL PRIMARY KEY,
  person_id INTEGER REFERENCES person(id) ON DELETE CASCADE,
  health_card_number VARCHAR(15) UNIQUE NOT NULL
);
`;

export const createContactInfoTableQuery = `
CREATE TABLE IF NOT EXISTS contact_info (
  id SERIAL PRIMARY KEY,
  person_id INTEGER REFERENCES person(id) ON DELETE CASCADE,
  primary_phone_number VARCHAR(20) NOT NULL,
  secondary_phone_number VARCHAR(20),
  emergency_contact VARCHAR(20) NOT NULL,
  emergency_contact_relationship VARCHAR(20),
  email VARCHAR(20)
);
`;

export const createMedicalHistoryTableQuery = `
CREATE TABLE IF NOT EXISTS medical_history (
  id SERIAL PRIMARY KEY,
  person_id INTEGER REFERENCES person(id) ON DELETE CASCADE,
  current_medications VARCHAR(100),
  allergies VARCHAR(100),
  chronic_conditions VARCHAR(100)
);
`;

export const createPatientVisitInfoTableQuery = `
CREATE TABLE IF NOT EXISTS patient_visit_info (
  id SERIAL PRIMARY KEY,
  person_id INTEGER REFERENCES person(id) ON DELETE CASCADE,
  reason_for_visit VARCHAR(100) NOT NULL,
  patient_pain_rating INTEGER NOT NULL,
  symptoms VARCHAR(100)
);
`;
