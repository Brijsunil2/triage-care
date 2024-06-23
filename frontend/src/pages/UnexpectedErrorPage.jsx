import "../styles/UnexpectedErrorPage.css";
import Button from "../components/Button";

const UnexpectedErrorPage = ({h1Text, h2Text, errorText, goToHomeFunction}) => {
  return (
    <main className="unexpecederrorpage-container text-center">
      <div className="container p-5">
        <h1 className="fs-1">{h1Text}</h1>
        <h2>{h2Text}</h2>
        <p>{errorText}</p>
        <Button
          classNames={"my-2 input-btn start-checkin-btn"}
          value="Go to Homepage"
          onClickEvent={() => goToHomeFunction()}
        />
      </div>
    </main>
  );
};

export default UnexpectedErrorPage;
