import DashedSection from "./DashedSection";
import { useState, useEffect } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { patientContactInfoSchema } from "../models/checkinDataSchemas";
import * as formik from "formik";
import Cleave from "cleave.js";
import "cleave.js/dist/addons/cleave-phone.ca";

const PatientContactInfoForm = () => {
  const [validate, setValidate] = useState(true);
  const { Formik } = formik;

  const phoneNumberCleaveFormat = {
    phone: true,
    phoneRegionCode: "CA",
    prefix: "+1 ",
    delimiter: "-",
  };

  const submitHandler = (values) => {
    setValidate(false);
    console.log("Patient contact info submit [PatientContactInfoForm]");
  };

  useEffect(() => {
    new Cleave("#primaryPhoneNumberInput", phoneNumberCleaveFormat);
    new Cleave("#secondaryPhoneNumberInput", phoneNumberCleaveFormat);
    new Cleave("#emergencyContactInput", phoneNumberCleaveFormat);
  }, []);

  return (
    <DashedSection
      className="patientContactInfoForm"
      sectionLabel="Contact Information"
    >
      <Formik
        validationSchema={patientContactInfoSchema}
        onSubmit={(values) => submitHandler(values)}
        initialValues={{
          primaryPhoneNumber: "",
          secondaryPhoneNumber: "",
          emergencyContact: "",
          emergencyContactRelationship: "",
          email: "",
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col sm={6}>
                <Form.Group className="input-container">
                  <Form.Label htmlFor="primaryPhoneNumberInput">
                    <span style={{ color: "red" }}>*</span> Primary Phone Number
                  </Form.Label>
                  <Form.Control
                    id="primaryPhoneNumberInput"
                    className="form-control primaryphonenumber-input"
                    type="tel"
                    name="primaryPhoneNumber"
                    value={values.primaryPhoneNumber}
                    onChange={handleChange}
                    isInvalid={false}
                  />
                  <Form.Control.Feedback type="invalid">
                    {validate ? "Please provide a valid phone number" : ""}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group className="input-container">
                  <Form.Label htmlFor="secondaryPhoneNumberInput">
                    Secondary Phone Number
                  </Form.Label>
                  <Form.Control
                    id="secondaryPhoneNumberInput"
                    className="form-control secondaryphonenumber-input"
                    type="tel"
                    name="secondaryPhoneNumber"
                    value={values.secondaryPhoneNumber}
                    onChange={handleChange}
                    isInvalid={false}
                  />
                  <Form.Control.Feedback type="invalid">
                    {validate ? "Please provide a valid phone number" : ""}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <Form.Group className="input-container">
                  <Form.Label htmlFor="emergencyContactInput">
                    <span style={{ color: "red" }}>*</span> Emergency Contact
                  </Form.Label>
                  <Form.Control
                    id="emergencyContactInput"
                    className="form-control emergencycontact-input"
                    type="tel"
                    name="emergencyContact"
                    value={values.emergencyContact}
                    onChange={handleChange}
                    isInvalid={false}
                  />
                  <Form.Control.Feedback type="invalid">
                    {validate
                      ? "Please provide a valid emergency contact number"
                      : ""}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group className="input-container">
                  <Form.Label htmlFor="emergencyContactRelationshipInput">
                    Emergency Contact Relationship
                  </Form.Label>
                  <Form.Control
                    id="emergencyContactRelationshipInput"
                    className="form-control emergencycontactrelationship-input"
                    type="text"
                    name="emergencyContactRelationship"
                    value={values.emergencyContactRelationship}
                    onChange={handleChange}
                    isInvalid={false}
                  />
                  <Form.Control.Feedback type="invalid">
                    {validate ? "Please provide the relationship type" : ""}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="input-container">
                  <Form.Label htmlFor="emailInput">Email</Form.Label>
                  <Form.Control
                    id="emailInput"
                    className="form-control email-input"
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isInvalid={false}
                  />
                  <Form.Control.Feedback type="invalid">
                    {validate ? "Please provide a valid email" : ""}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </DashedSection>
  );
};

export default PatientContactInfoForm;
