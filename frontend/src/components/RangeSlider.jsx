import "../styles/RangeSlider.css";

const RangeSlider = ({id, name, value, setValue, max=10, min=0}) => {
  return (
    <div className="slider-container">
      <input
        id={id}
        name={name}
        type="range"
        min={min}
        max={max}
        value={value}
        className="slider"
        onChange={setValue}
      />
    </div>
  );
};

export default RangeSlider;
