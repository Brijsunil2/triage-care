import * as yup from "yup";

export const patientHealthCardInfo = {
  healthCardNumber: "",
};

export const patientContactInfo = {
  primaryPhoneNumber: null,
  secondaryPhoneNumber: null,
  emergencyContact: null,
  emergencyContactRelationship: "",
  email: "",
};

export const patientInfo = {
  healthCardInfo: patientHealthCardInfo,
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  gender: "",
  address: "",
  contactInformation: patientContactInfo,
};

export const initialCheckinData = {
  patientInfo: patientInfo,
};

export const healthCardNumberSchema = yup.object({
  healthCardNumber: yup
    .string()
    .matches(
      /^[0-9]{4}-[0-9]{3}-[0-9]{3}-[A-Z]{2}$/,
      "Invalid health card number"
    )
    .required("Please provide your health card number"),
});

export const patientContactInfoSchema = yup.object({
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

export const patientInfoSchema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  dateOfBirth: yup.string().required(),
  gender: yup.string().required(),
  address: yup.string().required(),
});

export const checkinDataSchema = yup.object({
  patientInfo: {
    healthCardInfo: healthCardNumberSchema,
    contactInformation: patientContactInfoSchema,
    ...patientInfoSchema,
  },
});
