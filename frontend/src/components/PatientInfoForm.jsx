import { Form, Row, Col } from "react-bootstrap";

const PatientInfoForm = ({ handleChange, values, errors, touched }) => {
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
      <Row>
        <Col sm={6}>
          <Form.Group className="input-container">
            <Form.Label htmlFor="dateOfBirthInput">
              <span style={{ color: "red" }}>*</span> Date of Birth
            </Form.Label>
            <Form.Control
              id="dateOfBirthInput"
              className="form-control dateofbirth-input"
              type="date"
              name="dateOfBirth"
              value={values.dateOfBirth}
              onChange={handleChange}
              isInvalid={touched.dateOfBirth && errors.dateOfBirth}
            />
            <Form.Control.Feedback type="invalid">
              {errors.dateOfBirth}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col sm={6}>
          <Form.Group className="input-container">
            <Form.Label htmlFor="genderInput">
              <span style={{ color: "red" }}>*</span> Gender
            </Form.Label>
            <Form.Select
              id="genderInput"
              className="form-control gender-input"
              name="gender"
              value={values.gender}
              onChange={handleChange}
              isInvalid={touched.gender && errors.gender}
            >
              <option></option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.gender}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className="input-container">
            <Form.Label htmlFor="addressInput">
              <span style={{ color: "red" }}>*</span> Address
            </Form.Label>
            <Form.Control
              id="addressInput"
              className="form-control address-input"
              type="text"
              name="address"
              value={values.address}
              onChange={handleChange}
              isInvalid={touched.address && errors.address}
            />
            <Form.Control.Feedback type="invalid">
              {errors.addressInput}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
    </>
  );
};

export default PatientInfoForm;
