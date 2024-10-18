import "../styles/UnexpectedErrorPage.css";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const UnexpectedErrorPage = ({h1Text, h2Text, errorText, url}) => {
  const navigate = useNavigate();
  return (
    <main className="unexpecederrorpage-container text-center">
      <Container className="p-5">
        <h1 className="fs-1">{h1Text}</h1>
        <h2>{h2Text}</h2>
        <p>{errorText}</p>
        <Button
          className="p-2"
          value="Go to Homepage"
          onClick={() => navigate(url)}
        >Go to Homepage</Button>
      </Container>
    </main>
  );
};

export default UnexpectedErrorPage;
