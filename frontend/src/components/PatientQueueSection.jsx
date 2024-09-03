import { Container, Table } from "react-bootstrap";
import DashedSection from "./DashedSection";

const PatientQueueSection = () => {
  return (
    <Container className="patientqueue-container">
      <DashedSection sectionLabel="Patient Queue">
        <Table striped bordered hover> 
          <thead >
            <tr>
              <th>Queue Priority</th>
              <th>Case ID</th>
              <th>Patient Name</th>
              <th>Reason For Visit</th>
              <th>Pain Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>Mark Otto</td>
              <td>Broken arm</td>
              <td>8</td>
            </tr>
          </tbody>
        </Table>
      </DashedSection>
    </Container>
  );
};

export default PatientQueueSection;
