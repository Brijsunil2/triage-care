import logo from "../assets/triage_care_logo.png";
import { Container, Button, ProgressBar } from "react-bootstrap";
import "../styles/TriageDonePage.css";
import { useState, useEffect } from "react";

const TriageDonePage = ({ toStartCheckinPage }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 60)
        setProgress(progress + 1)
      else {
        toStartCheckinPage()
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <main className="triagedonepage-container text-center">
      <Container>
        <img
          className="main-logo py-4"
          src={logo}
          alt="Main triage care logo"
        />
        <h1>Thank You for Checking in!</h1>
        <h2>Your Check-in Process is Complete</h2>
        <h3>A healthcare professional will review your information shortly</h3>

        <h2 className="mt-4">Next Steps:</h2>
        <ul className="text-start mx-5">
          <li>Please take a seat in the waiting area</li>
          <li>Our staff will call your name when it is your turn</li>
          <li>
            If you have any questions or need assistance please approach the
            reception desk
          </li>
        </ul>
        <h3 className="my-4">We appreciate your patience</h3>
        <Button
          className="input-btn start-checkin-btn"
          onClick={toStartCheckinPage}
        >
          Back to Check-in
        </Button>
        <Container className="my-4">
          <h3 className="">Redirecting to Check-in:</h3>
          <ProgressBar now={progress * 1.666} label={`${60 - progress}s`}/>
        </Container>
      </Container>
    </main>
  );
};

export default TriageDonePage;
