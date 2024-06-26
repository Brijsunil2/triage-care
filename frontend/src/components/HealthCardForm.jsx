import { Container, Form, Row, Button, Col } from "react-bootstrap";
import { healthCardNumberSchema } from "../models/checkinDataSchemas";
import * as formik from "formik";
import Cleave from "cleave.js/react";

const HealthCardForm = () => {
  const { Formik } = formik;

  const submitHandler = (values) => {
    console.log("Healthcard submit [HealthCardForm]");
    console.log(values);
  };

  return (
    <Container className="healthcardform-container">
      <Formik
        initialValues={{ healthCardNumber: "" }}
        validationSchema={healthCardNumberSchema}
        onSubmit={values => submitHandler(values)}
      >
        {({ handleSubmit, handleChange, values, errors, touched }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Group className="input-container">
                  <Form.Label htmlFor="healthCardNumberInput">
                    <span style={{ color: "red" }}>*</span> Health Card Number
                  </Form.Label>
                  <div className="d-flex">
                    <Cleave
                      id="healthCardNumberInput"
                      className={`form-control input-box healthcardnumber-input ${touched.healthCardNumber && errors.healthCardNumber ? "is-invalid" : ""}`}
                      placeholder="XXXX-XXX-XXX-AB"
                      name="healthCardNumber"
                      value={values.healthCardNumber}
                      options={{
                        blocks: [4, 3, 3, 2],
                        delimiters: ["-"],
                        uppercase: true,
                      }}
                      onChange={handleChange}
                    />
                    <Button type="submit" className="input-btn">
                      Search Patient
                    </Button>
                  </div>
                  {touched.healthCardNumber && errors.healthCardNumber && (
                    <div className="invalid-feedback d-block">
                      {errors.healthCardNumber}
                    </div>
                  )}
                </Form.Group>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default HealthCardForm;
