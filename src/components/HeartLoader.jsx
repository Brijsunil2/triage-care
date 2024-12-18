import "../styles/HeartLoader.css";

const HeartLoader = ({width, height}) => {
  const heartSizing = {
    '--heart-width': width,
    '--heart-height': height
  }
  
  return (
    <div
      className="heartloader-container"
      style={heartSizing}
    >
      <div className="heart"></div>
    </div>
  );
};

export default HeartLoader;
