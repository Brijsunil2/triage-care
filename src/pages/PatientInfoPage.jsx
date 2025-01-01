import "../styles/PatientInfoPage.css";
import logo from "../assets/triage_care_logo.png";
import { Form, Container, Button } from "react-bootstrap";
import HealthCardForm from "../components/HealthCardForm";
import PatientInfoForm from "../components/PatientInfoForm";
import PatientContactInfoForm from "../components/PatientContactInfoForm";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import {
  updatePatientInfo,
  getCheckInData,
  reset,
} from "../slices/checkInDataSlice";
import { patientInfoFormSchema } from "../models/checkinDataSchemas";
import * as formik from "formik";

const PatientInfoPage = ({ prevPage, nextPage }) => {
  const checkInData =  useSelector(getCheckInData);
  const dispatch = useDispatch();
  const { Formik } = formik;

  const onClickPageBack = () => {
    dispatch(reset());
    prevPage();
  };

  const submitHandler = (values) => {
    console.log(checkInData)
    // dispatch(
    //   updatePatientInfo({
        
    //   })
    // );
    // nextPage();
  };

  const initialValues = {
    healthCardNumber: checkInData?.HealthCardInfo?.healthCardNumber || "",
    firstName: "",
    lastName: "",
    dateOfBirth:"",
    gender: "",
    address: "",
    primaryPhoneNumber: "",
    secondaryPhoneNumber: "",
    emergencyContact:"",
    emergencyContactRelationship: "",
    email: "",
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
              className={`px-4 py-2 my-4 d-flex align-items-center ${
                !isValid && "btn-disabled"
              }`}
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
