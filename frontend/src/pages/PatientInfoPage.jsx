import "../styles/PatientInfoPage.css";
import logo from "../assets/triage_care_logo.png";
import { Form, Container, Button } from "react-bootstrap";
import HealthCardForm from "../components/HealthCardForm";
import PatientInfoForm from "../components/PatientInfoForm";
import PatientContactInfoForm from "../components/PatientContactInfoForm";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { updatePatientInfo, getPatientInfo } from "../slices/checkInDataSlice";
import { patientInfoFormSchema } from "../models/checkinDataSchemas";
import * as formik from "formik";

const PatientInfoPage = ({ prevPage, nextPage }) => {
  const patientInfo = useSelector(getPatientInfo);
  const dispatch = useDispatch();
  const { Formik } = formik;

  const onClickPageBack = () => {
    prevPage();
  };

  const submitHandler = (values) => {
    dispatch(
      updatePatientInfo({
        patientInfo: {
          ...patientInfo,
          healthCardInfo: {
            healthCardNumber: values.healthCardNumber,
          },
          firstName: values.firstName,
          lastName: values.lastName,
          dateOfBirth: values.dateOfBirth,
          gender: values.gender,
          address: values.address,
          contactInformation: {
            primaryPhoneNumber: values.primaryPhoneNumber,
            secondaryPhoneNumber: values.secondaryPhoneNumber,
            emergencyContact: values.emergencyContact,
            emergencyContactRelationship: values.emergencyContactRelationship,
            email: values.email,
          },
        },
      })
    );
    nextPage();
  };

  const initialValues = {
    healthCardNumber: patientInfo?.healthCardInfo?.healthCardNumber || "",
    firstName: patientInfo?.firstName || "",
    lastName: patientInfo?.lastName || "",
    dateOfBirth: patientInfo?.dateOfBirth || "",
    gender: patientInfo?.gender || "",
    address: patientInfo?.address || "",
    primaryPhoneNumber:
      patientInfo?.contactInformation?.primaryPhoneNumber || "",
    secondaryPhoneNumber:
      patientInfo?.contactInformation?.secondaryPhoneNumber || "",
    emergencyContact: patientInfo?.contactInformation?.emergencyContact || "",
    emergencyContactRelationship:
      patientInfo?.contactInformation?.emergencyContactRelationship || "",
    email: patientInfo?.contactInformation?.email || "",
  };

  const formikSection = (
    <Formik
      validationSchema={patientInfoFormSchema}
      onSubmit={submitHandler}
      initialValues={initialValues}
    >
      {({ handleSubmit, handleChange, values, errors, touched }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <HealthCardForm
            handleChange={handleChange}
            values={values}
            errors={errors}
            touched={touched}
          />
          <hr />

          <PatientInfoForm
            handleChange={handleChange}
            values={values}
            errors={errors}
            touched={touched}
          />

          <PatientContactInfoForm
            handleChange={handleChange}
            values={values}
            errors={errors}
            touched={touched}
          />

          <div className="d-flex justify-content-between">
            <Button
              className="px-4 py-2 my-4 d-flex align-items-center"
              style={{ verticalAlign: "bottom" }}
              onClick={onClickPageBack}
            >
              <IoIosArrowBack />
              Back
            </Button>
            <Button
              type="submit"
              className="px-4 py-2 my-4 d-flex align-items-center"
              style={{ verticalAlign: "bottom" }}
            >
              Next
              <IoIosArrowForward />
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );

  return (
    <main className="patientinfopage-container">
      <Container>
        <Container className="text-center">
          <img
            className="main-logo py-4"
            src={logo}
            alt="Main triage care logo"
          />
          <h1>Welcome to TriageCare Check-in</h1>
          <p>Please fill in your details to start the check-in process.</p>

          <h1 className="pt-4">Patient Information</h1>
        </Container>
        {formikSection}
      </Container>
    </main>
  );
};

export default PatientInfoPage;
