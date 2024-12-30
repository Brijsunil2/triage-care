import * as yup from "yup";

export const patientHealthCardInfo = {
  healthCardNumber: "",
};

export const patientContactInfo = {
  primaryPhoneNumber: "",
  secondaryPhoneNumber: "",
  emergencyContact: "",
  emergencyContactRelationship: "",
  email: "",
};

export const patientInfo = {
  firstname: "",
  lastname: "",
  dateOfBirth: "",
  gender: "",
  address: "",
};

export const patientMedicalHistory = {
  currentMedications: [],
  allergies: "",
  chronicConditions: "",
};

export const patientVisitInfo = {
  reasonForVisit: "",
  patientPainRating: 0,
  symptoms: [],
};

export const initialCheckinData = {
  patientHealthCardInfo: patientHealthCardInfo,
  patientInfo: patientInfo,
  visitInfo: patientVisitInfo,
  patientAcknowledgement: "",
};

export const patientHealthCardInfoSchema = yup.object({
  healthCardNumber: yup
    .string()
    .matches(
      /^[0-9]{4}-[0-9]{3}-[0-9]{3}-[A-Z]{2}$/,
      "Invalid health card number"
    ),
});

export const patientInfoFormSchema = yup.object({
  healthCardNumber: yup
    .string()
    .matches(
      /^[0-9]{4}-[0-9]{3}-[0-9]{3}-[A-Z]{2}$/,
      "Invalid health card number"
    ),
  firstname: yup.string().required("Please provide your first name"),
  lastname: yup.string().required("Please provide your last name"),
  dateOfBirth: yup.string().required("Please provide your date of birth"),
  gender: yup.string().required("Please provide your gender"),
  address: yup.string().required("Please provide an address"),
  primaryPhoneNumber: yup
    .string()
    .matches(/^\+1 \d{3}-\d{3}-\d{4}$/, "Please provide a valid phone number")
    .required("Please provide a valid phone number"),
  secondaryPhoneNumber: yup
    .string()
    .matches(
      /^\+1 (\d{3}-\d{3}-\d{4})?$/,
      "Please provide a valid phone number"
    ),
  emergencyContact: yup
    .string()
    .matches(
      /^\+1 \d{3}-\d{3}-\d{4}$/,
      "Please provide a valid emergency contact number"
    )
    .required("Please provide a valid emergency contact number"),
  emergencyContactRelationship: yup.string(),
  email: yup.string().email("Please provide a valid email"),
});

export const patientVisitInfoSchema = yup.object({
  reasonForVisit: yup
    .string()
    .required("Please enter the reason for your visit today"),
  patientPainRating: yup
    .number()
    .positive("Pain rating must be greater than zero")
    .required(),
  symptoms: yup.array(),
  currentMedications: yup.array(),
  allergies: yup.string().notRequired(),
  chronicConditions: yup.string().notRequired(),
});

export const patientInfoSearchFormSchema = yup.object({
  firstname: yup.string().required("Please provide the first name"),
  lastname: yup.string().required("Please provide the last name"),
});
