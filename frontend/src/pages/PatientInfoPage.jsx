import "../styles/PatientInfoPage.css";
import logo from "../assets/triage_care_logo.png";
import { Container } from "react-bootstrap";
import HealthCardForm from "../components/HealthCardForm";
import PatientInfoForm from "../components/PatientInfoForm";

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
      </Container>
    </main>
  );
};

export default PatientInfoPage;
