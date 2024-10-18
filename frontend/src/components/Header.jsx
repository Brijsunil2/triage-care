import { Container } from "react-bootstrap";
import "../styles/Header.css";

const Header = () => {
  const onCheckBoxChange = (e) => {
    if (e.target.checked) {
      document.body.classList.add("text-black");
    } else {
      document.body.classList.remove("text-black");
    }
  };

  return (
    <header className="container py-3">
      <Container className="px-3">
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
    </header>
  );
};

export default Header;
