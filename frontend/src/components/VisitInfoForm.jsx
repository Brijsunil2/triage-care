import { Form, Row, Col } from "react-bootstrap";

const VisitInfoForm = ({ handleChange, values, errors, touched }) => {
  return (
    <Row>
      <Col>
        <Form.Group className="input-container">
          <Form.Label htmlFor="reasonForVisitInput">
            <span style={{ color: "red" }}>*</span> Reason for Visit
          </Form.Label>
          <Form.Control
            id="reasonForVisit"
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
  );
};

export default VisitInfoForm;
