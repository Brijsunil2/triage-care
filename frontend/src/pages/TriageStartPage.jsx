import "../styles/TriageStartPage.css";
import logo from "../assets/triage_care_logo.png";
import Button from "../components/Button";

const TriageStartPage = () => {
  return (
    <main className="triagestartpage-container text-center">
      <div className="container">
        <img
          className="main-logo py-4"
          src={logo}
          alt="Main triage care logo"
        />
        <h1>Welcome to TriageCare</h1>
        <p className="px-5">Your health is our priority. Start your check-in process below.</p>
        <Button
          classNames={"my-2 input-btn start-checkin-btn"}
          value="Start Check-in"
          onClickEvent={() =>
            console.log("Start Check-in Btn [TriageStartPage]")
          }
        />
      </div>
    </main>
  );
};

export default TriageStartPage;
