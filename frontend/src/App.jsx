import "./styles/App.css";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import LoadingPage from "./pages/LoadingPage";

function App() {
  return (
    <div className="app-container">
      <Suspense fallback={<LoadingPage />}>
        <Outlet />
      </Suspense>

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
