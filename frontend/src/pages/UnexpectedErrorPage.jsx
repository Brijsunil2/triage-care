import "../styles/UnexpectedErrorPage.css";
import Button from "../components/Button";

const UnexpectedErrorPage = () => {
  return (
    <main className="unexpecederrorpage-container text-center">
      <div className="container p-5">
        <h1 className="fs-1">Oops!</h1>
        <h2>Something went wrong</h2>
        <p>
          We encountered an unexpected error. Please try refreshing the page or
          go back to the homepage.
        </p>
        <Button
          classNames={"my-2 input-btn start-checkin-btn"}
          value="Go to Homepage"
          onClickEvent={() =>
            console.log("Go to Homepage [UnexpectedErrorPage]")
          }
        />
      </div>
    </main>
  );
};

export default UnexpectedErrorPage;
