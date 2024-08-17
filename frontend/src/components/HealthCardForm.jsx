import { Form, Row, Button, Col } from "react-bootstrap";
import Cleave from "cleave.js/react";
import { useSearchPatientByHealthCardNumberMutation } from "../slices/checkInDataSlice";

const HealthCardForm = ({ handleChange, values, errors, touched }) => {
  const [searchPatientByHealthCard, { isLoading }] =
    useSearchPatientByHealthCardNumberMutation();

  const searchPatientOnClick = async (healthCardNumber, errors) => {
    if (errors.healthCardNumber || healthCardNumber.length == 0) {
      console.log("Error");
    } else {
      try {
        const res = await searchPatientByHealthCard(healthCardNumber).unwrap();
        console.log(res);
      } catch (err) {
        console.log("Cannot find health card number", err);
      }
    }
  };

  return (
    <Row>
      <Col>
        <Form.Group className="input-container">
          <Form.Label htmlFor="healthCardNumberInput">
            <span style={{ color: "red" }}>*</span> Health Card Number
          </Form.Label>
          <div className="d-flex">
            <Cleave
              id="healthCardNumberInput"
              className={`form-control input-box healthcardnumber-input ${
                touched.healthCardNumber && errors.healthCardNumber
                  ? "is-invalid"
                  : ""
              }`}
              type="text"
              placeholder="XXXX-XXX-XXX-AB"
              name="healthCardNumber"
              value={values.healthCardNumber}
              options={{
                blocks: [4, 3, 3, 2],
                delimiter: "-",
                uppercase: true,
              }}
              onChange={handleChange}
            />
            <Button
              className="input-btn"
              onClick={() =>
                searchPatientOnClick(values.healthCardNumber, errors)
              }
            >
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
  );
};

export default HealthCardForm;
