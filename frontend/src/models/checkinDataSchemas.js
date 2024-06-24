import * as yup from "yup";

const healthCardNumberSchema = yup.object({
  healthCardNumber: yup.string().required().length(12),
});

const checkinDataSchema = yup.object({
  patientInfo: {
    healthCardNumber: healthCardNumberSchema,
  },
});

export { checkinDataSchema, healthCardNumberSchema };
