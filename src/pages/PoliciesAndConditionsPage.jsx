import { Container, Button } from "react-bootstrap";
import logo from "../assets/triage_care_logo.png";
import "../styles/PoliciesAndConditionsPage.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getCheckInData,
  useSubmitCheckInDataMutation,
  reset,
} from "../slices/checkInDataSlice";
import LoadingPage from "../pages/LoadingPage";

const PoliciesAndConditionsPage = ({ prevPage, nextPage }) => {
  const [patientAcknowledgement, setPatientAcknowledgement] = useState(false);
  const [patientAcknowledgementError, setPatientAcknowledgementError] =
    useState(false);

  const [submitCheckInData, { isLoading }] = useSubmitCheckInDataMutation();
  const dispatch = useDispatch();

  const checkInData = useSelector(getCheckInData);

  const onCheckBoxChange = (e) => {
    if (e.target.checked) {
      setPatientAcknowledgement(true);
    } else {
      setPatientAcknowledgement(false);
    }
  };

  const onClickPageBack = () => {
    prevPage();
  };

  const onClickPageNext = async () => {
    if (patientAcknowledgement) {
      try {
        if (process.env.DEMO_MODE !== "true") {
          const res = await submitCheckInData(checkInData).unwrap();
          dispatch(reset());
        }
        nextPage();
      } catch (err) {
        console.error("submitCheckInData", err);
      }
    } else {
      setPatientAcknowledgementError(true);
    }
  };

  const pageContent = (
    <main className="policiesconditionspage-container text-center">
      <Container>
        <img
          className="main-logo py-4"
          src={logo}
          alt="Main triage care logo"
        />
        <h1>Hospital Policies and Conditions</h1>
        <Container className="py-2">
          <h2>Terms of Service</h2>
          <p className="px-5">
            By accessing or using our services, you agree to comply with and be
            bound by the following terms and conditions...
          </p>
        </Container>
        <Container className="py-2">
          <h2>Privacy Policy</h2>
          <p className="px-5">
            Your privacy is important to us. This Privacy Policy explains how we
            collect, use, and protect your information...
          </p>
        </Container>

        <input
          type="checkbox"
          style={
            patientAcknowledgementError
              ? { outline: "1px auto var(--bs-form-invalid-color)" }
              : {}
          }
          id="patientAcknowledgementCheckBox"
          onChange={(e) => onCheckBoxChange(e)}
        />
        <label
          className="form-check-label mx-2"
          htmlFor="patientAcknowledgementCheckBox"
        >
          Accept Terms and Conditions
        </label>

        {patientAcknowledgementError && !patientAcknowledgement && (
          <div className="invalid-feedback d-block">
            Please accept the terms and conditions to continue
          </div>
        )}

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
            className={`px-4 py-2 my-4 d-flex align-items-center ${
              !patientAcknowledgement && "btn-disabled"
            }`}
            style={{ verticalAlign: "bottom" }}
            onClick={onClickPageNext}
          >
            Submit
            <IoIosArrowForward />
          </Button>
        </div>
      </Container>
    </main>
  );

  return <>{isLoading ? <LoadingPage /> : pageContent}</>;
};

export default PoliciesAndConditionsPage;
