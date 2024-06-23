import "./styles/App.css";
import CheckInPage from "./pages/CheckInPage";

function App() {
  return (
    <div className="app-container">
      <CheckInPage />
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
