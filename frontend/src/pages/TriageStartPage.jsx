import "../styles/TriageStartPage.css";
import logo from "../assets/triage_care_logo.png";
import { Container, Button } from "react-bootstrap";

const TriageStartPage = ({ nextPage }) => {
  return (
    <main className="triagestartpage-container text-center">
      <Container>
        <img
          className="main-logo py-4"
          src={logo}
          alt="Main triage care logo"
        />
        <h1>Welcome to TriageCare</h1>
        <p className="px-5">
          Your health is our priority. Start your check-in process below.
        </p>
        <Button className="input-btn start-checkin-btn" onClick={nextPage}>
          Start Check-in
        </Button>
      </Container>
    </main>
  );
};

export default TriageStartPage;
