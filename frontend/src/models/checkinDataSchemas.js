import * as yup from "yup";

const healthCardNumberSchema = yup.object({
  healthCardNumber: yup.string().required().length(12),
});

const patientContactInfoSchema = yup.object({
  primaryPhoneNumber: yup.string().length(14).required(),
  secondaryPhoneNumber: yup.string().length(14),
  emergencyContact: yup.string().length(14).required(),
  emergencyContactRelationship: yup.string().required(),
  email: yup.string().email()
})

const patientInfoSchema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  dateOfBirth: yup.string().required(),
  gender: yup.string().required(),
  address: yup.string().required(),
  contactInformation: patientContactInfoSchema
});

const checkinDataSchema = yup.object({
  patientInfo: {
    healthCardNumber: healthCardNumberSchema,
  },
});

export { checkinDataSchema, healthCardNumberSchema, patientInfoSchema, patientContactInfoSchema };
