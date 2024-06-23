import "./styles/App.css";
import Header from "./components/Header";
import TriageStartPage from "./pages/TriageStartPage";
import UnexpectedErrorPage from "./pages/UnexpectedErrorPage";

function App() {
  return (
    <div className="app-container">
      <Header />
      {/* <TriageStartPage /> */}
      <UnexpectedErrorPage />
    </div>
  );
}

export default App;
