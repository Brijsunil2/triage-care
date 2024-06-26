import { useState } from "react";
import { Container, Form, Row, Button, Col } from "react-bootstrap";
import { healthCardNumberSchema } from "../models/checkinDataSchemas";
import * as formik from "formik";
import Cleave from "cleave.js/react";

const HealthCardForm = () => {
  const [validate, setValidate] = useState(true);
  const { Formik } = formik;

  const submitHandler = (values) => {
    setValidate(true);
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
        {({ handleSubmit, handleChange, values }) => (
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
                      className="form-control input-box healthcardnumber-input"
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
                  <Form.Control.Feedback type="invalid">
                    {validate
                      ? "Please provide a valid health card number"
                      : ""}
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

export default HealthCardForm;
