import { Form, Row, Col } from "react-bootstrap";


const PatientInfoSearchForm = ({ handleChange, values, errors, touched }) => {
  return (
    <>
    <Row>
      <Col sm={6}>
        <Form.Group className="input-container">
          <Form.Label htmlFor="firstNameInput">
            <span style={{ color: "red" }}>*</span> First Name
          </Form.Label>
          <Form.Control
            id="firstNameInput"
            className="form-control firstname-input"
            type="text"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
            isInvalid={touched.firstName && errors.firstName}
          />
          <Form.Control.Feedback type="invalid">
            {errors.firstName}
          </Form.Control.Feedback>
        </Form.Group>
      </Col>
      <Col sm={6}>
        <Form.Group className="input-container">
          <Form.Label htmlFor="lastNameInput">
            <span style={{ color: "red" }}>*</span> Last Name
          </Form.Label>
          <Form.Control
            id="lastNameInput"
            className="form-control lastname-input"
            type="text"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
            isInvalid={touched.lastName && errors.lastName}
          />
          <Form.Control.Feedback type="invalid">
            {errors.lastName}
          </Form.Control.Feedback>
        </Form.Group>
      </Col>
    </Row>
  </>
  )
}

export default PatientInfoSearchForm