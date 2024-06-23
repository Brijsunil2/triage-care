import "../styles/LoadingPage.css";
import HeartLoader from "../components/HeartLoader";
import DotsLoader from "../components/DotsLoader";

const LoadingPage = () => {
  return (
    <main className="loadingpage-container flex-column">
      <HeartLoader width="30px" height="30px" />
      <h1 className="d-flex">
        Loading
        <DotsLoader width="5px" height="5px" gap="2px" />
      </h1>
    </main>
  );
};

export default LoadingPage;
