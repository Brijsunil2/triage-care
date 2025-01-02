import "../styles/PatientInfoPage.css";
import logo from "../assets/triage_care_logo.png";
import { Form, Container, Button } from "react-bootstrap";
import HealthCardForm from "../components/HealthCardForm";
import PatientInfoForm from "../components/PatientInfoForm";
import PatientContactInfoForm from "../components/PatientContactInfoForm";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import {
  getCheckInData,
  updateCheckInData,
  reset,
} from "../slices/checkInDataSlice";
import {
  patientInfoFormSchema,
} from "../models/checkinDataSchemas";
import * as formik from "formik";

const PatientInfoPage = ({ prevPage, nextPage }) => {
  const checkInData = useSelector(getCheckInData);
  const dispatch = useDispatch();
  const { Formik } = formik;

  const onClickPageBack = () => {
    dispatch(reset());
    prevPage();
  };

  const submitHandler = (values) => {
    dispatch(
      updateCheckInData({
        ...checkInData,
        healthCardInfo: { healthCardNumber: values.healthCardNumber },
        patientInfo: {
          firstName: values.firstName,
          lastName: values.lastname,
          dateOfBirth: values.dateOfBirth,
          gender: values.gender,
          address: values.address,
        },
        contactInfo: {
          primaryPhoneNumber: values.primaryPhoneNumber,
          secondaryPhoneNumber: values.secondaryPhoneNumber,
          emergencyContact: values.emergencyContact,
          emergencyContactRelationship: values.emergencyContactRelationship,
          email: values.email,
        },
      })
    );
    nextPage();
  };

  const initialValues = {
    healthCardNumber: checkInData?.healthCardInfo?.healthCardNumber || "",
    firstName: checkInData?.patientInfo?.firstName || "",
    lastName: checkInData?.patientInfo?.lastName || "",
    dateOfBirth: checkInData?.patientInfo?.dateOfBirth.substring(0, 10) || "",
    gender: checkInData?.patientInfo?.gender || "",
    address: checkInData?.patientInfo?.address || "",
    primaryPhoneNumber: checkInData?.contactInfo?.primaryPhoneNumber || "",
    secondaryPhoneNumber: checkInData?.contactInfo?.secondaryPhoneNumber || "",
    emergencyContact: checkInData?.contactInfo?.emergencyContact || "",
    emergencyContactRelationship:
      checkInData?.contactInfo?.emergencyContactRelationship || "",
    email: checkInData?.contactInfo?.email || "",
  };

  const formikSection = (
    <Formik
      enableReinitialize={true}
      validationSchema={patientInfoFormSchema}
      onSubmit={submitHandler}
      initialValues={initialValues}
    >
      {({ handleSubmit, handleChange, values, errors, touched, isValid }) => (
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
              className={`px-4 py-2 my-4 d-flex align-items-center`}
              style={{ verticalAlign: "bottom" }}
              disabled={!isValid}
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
