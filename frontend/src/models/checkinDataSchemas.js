import * as yup from "yup";

const healthCardNumberSchema = yup.object({
  healthCardNumber: yup.string().required().length(12),
});

const patientContactInfoSchema = yup.object({
  primaryPhoneNumber: yup.string().length(10).required(),
  secondaryPhoneNumber: yup.string().length(10),
  emergencyContact: yup.string().length(10).required(),
  emergencyContactRelationship: yup.string(),
  email: yup.string().email()
})

const patientInfoSchema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  dateOfBirth: yup.string().required(),
  gender: yup.string().required(),
  address: yup.string().required(),
});

const checkinDataSchema = yup.object({
  patientInfo: {
    healthCardNumber: healthCardNumberSchema,
    patientInfo: patientInfoSchema,
    contactInformation: patientContactInfoSchema
  },
});

export { checkinDataSchema, healthCardNumberSchema, patientInfoSchema, patientContactInfoSchema };
