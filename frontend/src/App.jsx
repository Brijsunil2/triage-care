import "./styles/App.css";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import LoadingPage from "./pages/LoadingPage";
import { Container } from "react-bootstrap";
import Header from "./components/Header";

function App() {
  return (
    <Container className="app-container">
      <Header />
      <Suspense fallback={<LoadingPage />}>
        <Outlet />
      </Suspense>
    </Container>
  );
}

export default App;
