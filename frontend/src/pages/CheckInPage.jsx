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
  const [step, setStep] = useState(0);

  const subPages = [
    <TriageStartPage nextPage={() => setStep(1)} />,
    <PatientInfoPage prevPage={() => setStep(0)} nextPage={() => setStep(2)} />,
    <VisitInfoPage prevPage={() => setStep(1)} nextPage={() => setStep(3)} />,
    <PoliciesAndConditionsPage
      prevPage={() => setStep(2)}
      nextPage={() => setStep(4)}
    />,
    <TriageDonePage toStartCheckinPage={() => setStep(0)} />,
  ];

  return (
    <Container className="checkinpage-container">
      <PatientCheckinDataProvider>
        <Header />
        {subPages[step]}
      </PatientCheckinDataProvider>
    </Container>
  );
};

export default CheckInPage;
