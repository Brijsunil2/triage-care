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
  healthCardNumber: yup.string().length(15).required()
});

export const patientContactInfoSchema = yup.object({
  primaryPhoneNumber: yup.string().length(10).required(),
  secondaryPhoneNumber: yup.string().length(10),
  emergencyContact: yup.string().length(10).required(),
  emergencyContactRelationship: yup.string(),
  email: yup.string().email(),
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