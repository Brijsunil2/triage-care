import { useState } from "react";
import Header from "../components/Header";
import TriageStartPage from "./TriageStartPage";
import PatientInfoPage from "./PatientInfoPage";
import { Container } from "react-bootstrap";

const CheckInPage = () => { 
  const [step, setStep] = useState(1);
  const [checkinData, setheckinData] = useState()

  return (
    <Container className="checkinpage-container">
      <Header />
      {step === 1 && <TriageStartPage nextPage={() => setStep(2)} />}
      {step === 2 && <PatientInfoPage nextPage={() => setStep(3)} />}
    </Container>
  );
};

export default CheckInPage;
