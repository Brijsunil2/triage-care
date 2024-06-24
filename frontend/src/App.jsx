import "./styles/App.css";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import LoadingPage from "./pages/LoadingPage";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container className="app-container">
      <Suspense fallback={<LoadingPage />}>
        <Outlet />
      </Suspense>
    </Container>
  );
}

export default App;
