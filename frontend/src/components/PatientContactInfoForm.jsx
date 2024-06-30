import DashedSection from "./DashedSection";
import { Form, Row, Col } from "react-bootstrap";
import Cleave from "cleave.js/react";
import "cleave.js/dist/addons/cleave-phone.ca";

const PatientContactInfoForm = ({handleChange, values, errors, touched}) => {
  const phoneNumberCleaveFormat = {
    phone: true,
    phoneRegionCode: "CA",
    prefix: "+1 ",
    delimiter: "-",
  };

  return (
    <DashedSection
      className="patientContactInfoForm"
      sectionLabel="Contact Information"
    >
      <Row>
        <Col sm={6}>
          <Form.Group className="input-container">
            <Form.Label htmlFor="primaryPhoneNumberInput">
              <span style={{ color: "red" }}>*</span> Primary Phone Number
            </Form.Label>
            <Cleave
              id="primaryPhoneNumberInput"
              className={`form-control primaryphonenumber-input ${
                touched.primaryPhoneNumber && errors.primaryPhoneNumber
                  ? "is-invalid"
                  : ""
              }`}
              options={phoneNumberCleaveFormat}
              type="tel"
              name="primaryPhoneNumber"
              value={values.primaryPhoneNumber}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              {errors.primaryPhoneNumber}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col sm={6}>
          <Form.Group className="input-container">
            <Form.Label htmlFor="secondaryPhoneNumberInput">
              Secondary Phone Number
            </Form.Label>
            <Cleave
              id="secondaryPhoneNumberInput"
              className={`form-control secondaryphonenumber-input ${
                touched.secondaryPhoneNumber && errors.secondaryPhoneNumber
                  ? "is-invalid"
                  : ""
              }`}
              options={phoneNumberCleaveFormat}
              type="tel"
              name="secondaryPhoneNumber"
              value={values.secondaryPhoneNumber}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              {errors.secondaryPhoneNumber}
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
            <Cleave
              id="emergencyContactInput"
              className={`form-control emergencycontact-input ${
                touched.emergencyContact && errors.emergencyContact
                  ? "is-invalid"
                  : ""
              }`}
              options={phoneNumberCleaveFormat}
              type="tel"
              name="emergencyContact"
              value={values.emergencyContact}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              {errors.emergencyContact}
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
              isInvalid={
                touched.emergencyContactRelationship &&
                errors.emergencyContactRelationship
              }
            />
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
              isInvalid={touched.email && errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
    </DashedSection>
  );
};

export default PatientContactInfoForm;
