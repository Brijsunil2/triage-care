import { useState } from "react";
import Header from "../components/Header";
import TriageStartPage from "./TriageStartPage";
import PatientInfoPage from "./PatientInfoPage";
import VisitInfoPage from "./VisitInfoPage";
import PoliciesAndConditionsPage from "./PoliciesAndConditionsPage";
import TriageDonePage from "./TriageDonePage";
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
        {step === 3 && (
          <VisitInfoPage
            prevPage={() => setStep(2)}
            nextPage={() => setStep(4)}
          />
        )}
        {step === 4 && (
          <PoliciesAndConditionsPage
            prevPage={() => setStep(3)}
            nextPage={() => setStep(5)}
          />
        )}
        {step === 5 && <TriageDonePage toStartCheckinPage={() => setStep(1)} />}
      </PatientCheckinDataProvider>
    </Container>
  );
};

export default CheckInPage;
