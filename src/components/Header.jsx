import { Container } from "react-bootstrap";
import "../styles/Header.css";
import { OverlayTrigger, Tooltip, Button } from "react-bootstrap";

const Header = () => {
  const onCheckBoxChange = (e) => {
    if (e.target.checked) {
      document.body.classList.add("text-black");
    } else {
      document.body.classList.remove("text-black");
    }
  };

  const tooltip = (
    <Tooltip style={{position:"fixed"}}>
      This version is for demo purposes only. It is not intended for
      real-world use. Fake client data will be generated. Please do not use
      real client data. This version does not use a backend server, no data
      will be saved.
    </Tooltip>
  );

  return (
    <header className="container py-3">
      <Container className="px-3 d-flex justify-content-between align-items-center">
        <Container>
          <input
            type="checkbox"
            className=""
            id="blackTextCheckbox"
            onChange={(e) => onCheckBoxChange(e)}
          ></input>
          <label className="form-check-label mx-2" htmlFor="blackTextCheckbox">
            Black Font
          </label>
        </Container>
        {process.env.DEMO_MODE === "true" && (
          <OverlayTrigger placement="left" delay={{ show: 250, hide: 400 }} overlay={tooltip}>
            <Button className="input-btn" style={{background: "red", border: "none"}}>Demo Version</Button>
          </OverlayTrigger>
        )}
      </Container>
    </header>
  );
};

export default Header;
