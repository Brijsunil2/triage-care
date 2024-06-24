import "../styles/Input.css";
import { Form, Button } from "react-bootstrap";

const Input = (props) => {
  return (
    <div className="input-container">
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
          onClick={() => console.log("Search patient button [HealthCardForm]")}
        >
          Search Patient
        </Button>
      </div>
    </div>
  );
};

export default Input;
