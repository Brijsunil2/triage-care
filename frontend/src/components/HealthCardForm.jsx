import "../styles/HealthCardForm.css";
import { useState } from "react";
import { Container, Col, Form, Row } from "react-bootstrap";
import { healthCardNumberSchema } from "../models/checkinDataSchemas";
import Input from "./Input";
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
              <Form.Group>
                <Input />
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
