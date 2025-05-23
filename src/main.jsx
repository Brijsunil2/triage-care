import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { store } from "./store.js";
import { Provider } from "react-redux";

const CheckInPage = lazy(() => import("./pages/CheckInPage.jsx"));

const UnexpectedErrorPage = lazy(() =>
  import("./pages/UnexpectedErrorPage.jsx")
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/triage-care"
      element={<App />}
      errorElement={
        <UnexpectedErrorPage
          h1Text="Oops!"
          h2Text="Something went wrong"
          errorText="We encountered an unexpected error. Please try refreshing the page or go back to the homepage."
          goToHomeFunction="/triage-care/checkin"
        />
      }
    >
      <Route index element={<Navigate to="checkin" replace />} />
      <Route path="checkin" element={<CheckInPage />} />
      <Route
        path="*"
        element={
          <UnexpectedErrorPage
            h1Text="Oops! 404"
            h2Text=""
            errorText="Page Not Found."
            url="/triage-care/checkin"
          />
        }
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
