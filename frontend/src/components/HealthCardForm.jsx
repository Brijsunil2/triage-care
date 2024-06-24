import "../styles/HealthCardForm.css";
import { useState } from "react";
import { Container, Form, Row, Button } from "react-bootstrap";
import { healthCardNumberSchema } from "../models/checkinDataSchemas";
import * as formik from "formik";

const HealthCardForm = () => {
  const [validate, setValidate] = useState(true);
  const { Formik } = formik;

  const submitHandler = () => {
    setValidate(false);
    console.log("Healthcard submit [HealthCardForm]");
  };

  return (
    <Container className="healthcardform-container">
      <Formik
        validationSchema={healthCardNumberSchema}
        onSubmit={() => submitHandler()}
        initialValues={{
          healthCardNumber: "",
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form onSubmit={handleSubmit}>
            <Row>
              <Form.Group className="input-container">
                <Form.Label>
                  <span style={{ color: "red" }}>*</span> Health Card Number
                </Form.Label>
                <div className="d-flex">
                  <Form.Control
                    className="input-box"
                    type="text"
                    placeholder="XXXX-XXX-XXX-AB"
                    name="Health Card Number"
                    value=""
                    onChange={() => console.log("Change")}
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
                  {validate ? "Please provide a valid health card number" : ""}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default HealthCardForm;
