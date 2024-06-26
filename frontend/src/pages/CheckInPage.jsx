import { useState } from "react";
import Header from "../components/Header";
import TriageStartPage from "./TriageStartPage";
import PatientInfoPage from "./PatientInfoPage";
import { Container } from "react-bootstrap";
import { PatientCheckinDataProvider } from "../context/PatientCheckinDataContext";

const CheckInPage = () => {
  const [step, setStep] = useState(1);

  return (
    <Container className="checkinpage-container">
      <PatientCheckinDataProvider>
        <Header />
        {step === 1 && <TriageStartPage nextPage={() => setStep(2)} />}
        {step === 2 && (
          <PatientInfoPage
            prevPage={() => setStep(1)}
            nextPage={() => setStep(3)}
          />
        )}
      </PatientCheckinDataProvider>
    </Container>
  );
};

export default CheckInPage;
