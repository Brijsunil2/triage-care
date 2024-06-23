import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate
} from "react-router-dom";

const CheckInPage = lazy(() => import("./pages/CheckInPage.jsx"));

const UnexpectedErrorPage = lazy(() =>
  import("./pages/UnexpectedErrorPage.jsx")
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={<App />}
        errorElement={
          <UnexpectedErrorPage
            h1Text="Oops!"
            h2Text="Something went wrong"
            errorText="We encountered an unexpected error. Please try refreshing the page or go back to the homepage."
            goToHomeFunction={() =>
              console.log("Go to Homepage [UnexpectedErrorPage]")
            }
          />
        }
      >
        <Route path="/" element={<Navigate to="/checkin" replace />} />
        <Route path="/checkin" element={<CheckInPage />} />
        <Route
          path="*"
          element={
            <UnexpectedErrorPage
              h1Text="Oops! 404"
              h2Text=""
              errorText="Page Not Found."
              goToHomeFunction={() =>
                console.log("Go to Homepage [UnexpectedErrorPage]")
              }
            />
          }
        />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
