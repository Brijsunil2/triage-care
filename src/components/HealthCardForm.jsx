import { Form, Row, Button, Col } from "react-bootstrap";
import Cleave from "cleave.js/react";
import { useSelector, useDispatch } from "react-redux";
import {
  useSearchPatientByHealthCardNumberMutation,
  updateCheckInData,
  getCheckInData,
} from "../slices/checkInDataSlice";
import LoadingPage from "../pages/LoadingPage";
import { contactInfo } from "../models/checkinDataSchemas";

const HealthCardForm = ({ handleChange, values, errors, touched }) => {
  const checkInData = useSelector(getCheckInData);
  const dispatch = useDispatch();
  const [searchPatientByHealthCard, { isLoading }] =
    useSearchPatientByHealthCardNumberMutation();

  const searchPatientOnClick = async (healthCardNumber) => {
    if (!errors.healthCardNumber) {
      try {
        delete errors.healthCardNumber;
        let res = await searchPatientByHealthCard(healthCardNumber).unwrap();
        console.log(res);
        dispatch(
          updateCheckInData({
            ...checkInData,
            patientInfo: {
              firstName: res.patientInfo.firstname,
              lastName: res.patientInfo.lastname,
              dateOfBirth: res.patientInfo.date_of_birth,
              gender: res.patientInfo.gender,
              address: res.patientInfo.address,
            },
            contactInfo: {
              primaryPhoneNumber: res.contactInfo.primary_phone_number,
              secondaryPhoneNumber: res.contactInfo.secondary_phone_number,
              emergencyContact: res.contactInfo.emergency_contact,
              emergencyContactRelationship:
                res.contactInfo.emergency_contact_relationship,
              email: res.contactInfo.email,
            },
          })
        );
      } catch (err) {
        if (err.status === 404) {
          console.log(err.data.message, err);
        } else {
          console.log(
            "Unexpected error has occured, please try again or restart.",
            err
          );
        }
      }
    } else {
      console.log(errors.healthCardNumber);
    }
  };

  return (
    <>
      {isLoading && <LoadingPage />}
      <Row>
        <Col>
          <Form.Group className="input-container">
            <Form.Label htmlFor="healthCardNumberInput">
              Health Card Number
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
                onClick={() => searchPatientOnClick(values.healthCardNumber)}
              >
                Search Patient
              </Button>
            </div>
          </Form.Group>
        </Col>
      </Row>
    </>
  );
};

export default HealthCardForm;
