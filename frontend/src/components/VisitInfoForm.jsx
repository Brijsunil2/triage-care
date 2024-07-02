import { Form, Row, Col, Container } from "react-bootstrap";
import DashedSection from "./DashedSection";
import RangeSlider from "./RangeSlider";
import "../styles/VisitInfoForm.css";

const VisitInfoForm = ({ handleChange, values, errors, touched }) => {
  return (
    <Container>
      <Row>
        <Col>
          <Form.Group className="input-container">
            <Form.Label htmlFor="reasonForVisitInput">
              <span style={{ color: "red" }}>*</span> Reason for Visit
            </Form.Label>
            <Form.Control
              id="reasonForVisitInput"
              as="textarea"
              placeholder="Reason for visit"
              name="reasonForVisit"
              value={values.reasonForVisit}
              style={{ minHeight: "100px" }}
              onChange={handleChange}
            />
            {touched.reasonForVisit && errors.reasonForVisit && (
              <div className="invalid-feedback d-block">
                {errors.reasonForVisit}
              </div>
            )}
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group className="input-container">
            <DashedSection
              sectionLabel="Pain Scale"
              smallSection={true}
              required={true}
            >
              <p className="p-small text-center">
                Please use the slider below to indicate your current level of
                pain. 1 represents no pain and 10 represents the worst pain
                imaginable.
              </p>
              <Container>
                <RangeSlider
                  id="patientPainRatingInput"
                  name="patientPainRating"
                  value={values.patientPainRating}
                  setValue={handleChange}
                />
              </Container>
              <p className="p-small pain-rating-text text-center mb-0">
                Pain Rating: {values.patientPainRating}
              </p>
            </DashedSection>
          </Form.Group>
        </Col>
      </Row>
    </Container>
  );
};

export default VisitInfoForm;
