import "../styles/UnexpectedErrorPage.css";
import { Container, Button } from "react-bootstrap";

const UnexpectedErrorPage = ({h1Text, h2Text, errorText, goToHomeFunction}) => {
  return (
    <main className="unexpecederrorpage-container text-center">
      <Container className="p-5">
        <h1 className="fs-1">{h1Text}</h1>
        <h2>{h2Text}</h2>
        <p>{errorText}</p>
        <Button
          value="Go to Homepage"
          onClick={() => goToHomeFunction()}
        >Go to Homepage</Button>
      </Container>
    </main>
  );
};

export default UnexpectedErrorPage;
