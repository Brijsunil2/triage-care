import "../styles/VisitInfoPage.css";
import { Form, Container, Button } from "react-bootstrap";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import logo from "../assets/triage_care_logo.png";
import VisitInfoForm from "../components/VisitInfoForm";
import * as formik from "formik";
import { patientVisitInfoSchema } from "../models/checkinDataSchemas";
import { useSelector, useDispatch } from "react-redux";
import {
  updateVisitInfo,
  getVisitInfo,
  updateMedicalHistory,
  getMedicalHistory,
} from "../slices/checkInDataSlice";

const VisitInfoPage = ({ prevPage, nextPage }) => {
  const visitInfo = useSelector(getVisitInfo);
  const medicalHistory = useSelector(getMedicalHistory);
  const dispatch = useDispatch();

  const { Formik } = formik;

  const onClickPageBack = () => {
    prevPage();
  };

  const submitHandler = (values) => {
    dispatch(
      updateVisitInfo({
        ...visitInfo,
        reasonForVisit: values.reasonForVisit,
        patientPainRating: values.patientPainRating,
        symptoms: [...values.symptoms],
      })
    );
    dispatch(
      updateMedicalHistory({
        ...medicalHistory,
        currentMedications: [...values.currentMedications],
        allergies: values.allergies,
        chronicConditions: values.chronicConditions,
      })
    );
    nextPage();
  };

  const initialValues = {
    reasonForVisit: visitInfo?.reasonForVisit || "",
    patientPainRating: visitInfo?.patientPainRating || 0,
    symptoms: visitInfo?.symptoms || [],
    currentMedications: medicalHistory?.currentMedications || [],
    allergies: medicalHistory?.allergies || "",
    chronicConditions: medicalHistory?.chronicConditions || "",
  };

  const formikSection = (
    <Formik
      validationSchema={patientVisitInfoSchema}
      onSubmit={submitHandler}
      initialValues={initialValues}
    >
      {({ handleSubmit, handleChange, values, errors, touched, isValid }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <VisitInfoForm
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
    <main className="visitinfopage-container">
      <Container>
        <Container className="text-center">
          <img
            className="main-logo py-4"
            src={logo}
            alt="Main triage care logo"
          />
          <h1>Visit Information</h1>
          <p>
            Please provide accurate and detailed information about this visit
            below.
          </p>
        </Container>
        {formikSection}
      </Container>
    </main>
  );
};

export default VisitInfoPage;
