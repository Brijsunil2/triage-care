import { useEffect, useState } from "react";
import { Container, Form, Row, Button, Col } from "react-bootstrap";
import { healthCardNumberSchema } from "../models/checkinDataSchemas";
import * as formik from "formik";
import Cleave from "cleave.js";

const HealthCardForm = () => {
  const [validate, setValidate] = useState(true);
  const { Formik } = formik;

  const submitHandler = (values) => {
    setValidate(false);
    console.log("Healthcard submit [HealthCardForm]");
  };

  useEffect(() => {
    new Cleave("#healthCardNumberInput", {
      blocks: [4, 3, 3, 2],
      delimiters: ["-"],
      uppercase: [true],
    });
  }, []);

  return (
    <Container className="healthcardform-container">
      <Formik
        validationSchema={healthCardNumberSchema}
        onSubmit={(values) => submitHandler(values)}
        initialValues={{
          healthCardNumber: "",
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Group className="input-container">
                  <Form.Label htmlFor="healthCardNumberInput">
                    <span style={{ color: "red" }}>*</span> Health Card Number
                  </Form.Label>
                  <div className="d-flex">
                    <Form.Control
                      id="healthCardNumberInput"
                      className="form-control input-box healthcardnumber-input"
                      type="text"
                      placeholder="XXXX-XXX-XXX-AB"
                      name="healthCardNumber"
                      value={values.healthCardNumber}
                      onChange={handleChange}
                      isInvalid={false}
                    />
                    <Button
                      className="input-btn"
                      onClick={() =>
                        console.log("Search patient button [HealthCardForm]")
                      }
                    >
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
