import "../styles/PatientInfoPage.css";
import logo from "../assets/triage_care_logo.png";
import { Container, Button } from "react-bootstrap";
import HealthCardForm from "../components/HealthCardForm";
import PatientInfoForm from "../components/PatientInfoForm";
import PatientContactInfoForm from "../components/PatientContactInfoForm";
import { IoIosArrowForward } from "react-icons/io";

const PatientInfoPage = () => {
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

        <HealthCardForm />

        <hr />

        <PatientInfoForm />
        <PatientContactInfoForm />

        <div className="d-flex flex-row-reverse">
          <Button
            className="px-4 py-2 my-4 d-flex align-items-center"
            style={{verticalAlign: "bottom"}}
            onClick={() => console.log("Submit patient info [PatientInfoPage]")}
          >
            Next
            <IoIosArrowForward />
          </Button>
        </div>
      </Container>
    </main>
  );
};

export default PatientInfoPage;
