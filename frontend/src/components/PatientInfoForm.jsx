import { useState } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import { patientInfoSchema } from "../models/checkinDataSchemas";
import * as formik from "formik";

const PatientInfoForm = () => {
  const [validate, setValidate] = useState(true);
  const { Formik } = formik;

  const submitHandler = (values) => {
    setValidate(false);
    console.log("Patient info submit [PatientInfoForm]");
  };

  return (
    <Container className="patientInfoForum-container">
      <Formik
        validationSchema={patientInfoSchema}
        onSubmit={(values) => submitHandler(values)}
        initialValues={{
          firstName: "",
          lastName: "",
          dateOfBirth: "",
          gender: "",
          address: "",
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form onSubmit={handleSubmit}>
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
                    isInvalid={false}
                  />
                  <Form.Control.Feedback type="invalid">
                    {validate ? "Please provide your first name" : ""}
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
                    isInvalid={false}
                  />
                  <Form.Control.Feedback type="invalid">
                    {validate ? "Please provide your last name" : ""}
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
                    isInvalid={false}
                  />
                  <Form.Control.Feedback type="invalid">
                    {validate ? "Please provide your date of birth" : ""}
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
                    isInvalid={false}
                  >
                    <option></option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {validate ? "Please provide your gender" : ""}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row>
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
                  isInvalid={false}
                />
                <Form.Control.Feedback type="invalid">
                  {validate ? "Please provide an address" : ""}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default PatientInfoForm;
