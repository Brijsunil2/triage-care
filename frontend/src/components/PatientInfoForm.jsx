import "../styles/PatientInfoForm.css";
import { useEffect, useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { patientInfoSchema } from "../models/checkinDataSchemas";
import * as formik from "formik";
import Cleave from "cleave.js";

const PatientInfoForm = () => {
  const [validate, setValidate] = useState(true);
  const { Formik } = formik;

  const submitHandler = (values) => {
    setValidate(false);
    console.log("Patient info submit [PatientInfoForm]");
  };

  // useEffect(() => {
  //   new Cleave("#healthCardNumber", {
  //     blocks: [4, 3, 3, 2],
  //     delimiters: ["-"],
  //     uppercase: [true],
  //   });
  // }, []);

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
                    className="form-control firstName-input"
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
                    className="form-control lastName-input"
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
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default PatientInfoForm;
