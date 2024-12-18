import { Form, Row, Button, Col } from "react-bootstrap";
import Cleave from "cleave.js/react";
import { useSelector, useDispatch } from "react-redux";
import {
  updatePatientInfo,
  useSearchPatientByHealthCardNumberMutation,
  getPatientInfo,
} from "../slices/checkInDataSlice";
import LoadingPage from "../pages/LoadingPage";
import { useState } from "react";

const HealthCardForm = ({ handleChange, values, errors, touched }) => {
  const [formError, setFormError] = useState(false);
  const [searchSuccess, setSearchSuccess] = useState(false);
  const patientInfo = useSelector(getPatientInfo);
  const dispatch = useDispatch();
  const [searchPatientByHealthCard, { isLoading }] =
    useSearchPatientByHealthCardNumberMutation();

  const searchPatientOnClick = async (healthCardNumber) => {
    if (errors.healthCardNumber || healthCardNumber.length == 0) {
      errors.healthCardNumber = "Please provide your health card number";
      setFormError(true);
      setSearchSuccess(false);
    } else {
      try {
        setFormError(false);
        delete errors.healthCardNumber;
        let res = await searchPatientByHealthCard(healthCardNumber).unwrap();

        if (res.patientInfo) {
          res = res.patientInfo;

          dispatch(
            updatePatientInfo({
              patientInfo: {
                ...patientInfo,
                healthCardInfo: {
                  healthCardNumber: values.healthCardNumber,
                },
                firstName: res.firstname,
                lastName: res.lastname,
                dateOfBirth: res.date_of_birth.slice(0, 10),
                gender: res.gender,
                address: res.address,
                contactInformation: {
                  primaryPhoneNumber: res.primary_phone_number,
                  secondaryPhoneNumber: res.secondary_phone_number,
                  emergencyContact: res.emergency_contact,
                  emergencyContactRelationship:
                    res.emergency_contact_relationship,
                  email: res.email,
                },
              },
            })
          );
          setSearchSuccess(true);
        } else {
          // errors.healthCardNumber = "Invalid health card number";
          setFormError(false);
          setSearchSuccess(true);
          delete errors.healthCardNumber;
        }
      } catch (err) {
        console.log("Cannot find health card number", err);
        setSearchSuccess(false);
      }
    }
  };

  return (
    <>
      {isLoading && <LoadingPage />}
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
                  (touched.healthCardNumber && errors.healthCardNumber) ||
                  formError
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
                onClick={() => searchPatientOnClick(values.healthCardNumber)}
              >
                {searchSuccess && <span>&#10003; </span>} Search Patient
              </Button>
            </div>
            {(touched.healthCardNumber && errors.healthCardNumber) ||
            formError ? (
              <div className="invalid-feedback d-block">
                {errors.healthCardNumber}
              </div>
            ) : (
              <></>
            )}
          </Form.Group>
        </Col>
      </Row>
    </>
  );
};

export default HealthCardForm;
