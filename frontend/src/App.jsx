import "./styles/App.css";
import Header from "./components/Header";
import TriageStartPage from "./pages/TriageStartPage";

function App() {
  return (
    <div className="app-container">
      <Header />
      <TriageStartPage />
    </div>
  );
}

export default App;
