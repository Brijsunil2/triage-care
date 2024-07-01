import "../styles/VisitInfoPage.css";
import { Form, Container, Button } from "react-bootstrap";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import logo from "../assets/triage_care_logo.png";
import VisitInfoForm from "../components/VisitInfoForm";
import { PatientCheckinDataContext } from "../context/PatientCheckinDataContext";
import { useContext } from "react";
import * as formik from "formik";

const VisitInfoPage = ({ prevPage, nextPage }) => {
  const { checkinData, setCheckinData } = useContext(PatientCheckinDataContext);
  const { Formik } = formik;

  const onClickPageBack = () => {
    prevPage();
    setCheckinData({ ...initialCheckinData });
  };

  const submitHandler = (values) => {};

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

        <Formik
          // validationSchema={}
          onSubmit={submitHandler}
          initialValues={{
            reasonForVisit: ""
          }}
        >
          {({ handleSubmit, handleChange, values, errors, touched }) => (
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
      </Container>
    </main>
  );
};

export default VisitInfoPage;
