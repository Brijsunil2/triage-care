import "../styles/Button.css";

const Button = ({ value, classNames, onClickEvent }) => {
  return (
    <input
      className={classNames}
      value={value}
      type="button"
      onClick={() => onClickEvent()}
    />
  );
};

export default Button;
