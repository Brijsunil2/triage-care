import "./styles/App.css";
import Header from "./components/Header";
import TriageStartPage from "./pages/TriageStartPage";
import UnexpectedErrorPage from "./pages/UnexpectedErrorPage";
import HeartLoader from "./components/HeartLoader";

function App() {
  return (
    <div className="app-container">
      <Header />
      <TriageStartPage />
      <HeartLoader width="20px" height="20px" />
      {/* <UnexpectedErrorPage
        h1Text="Oops!"
        h2Text="Something went wrong"
        errorText="We encountered an unexpected error. Please try refreshing the page or go back to the homepage."
        goToHomeFunction={() =>
          console.log("Go to Homepage [UnexpectedErrorPage]")
        }
      /> */}
    </div>
  );
}

export default App;
