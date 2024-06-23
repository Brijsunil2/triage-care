import "../styles/Header.css";

const Header = () => {
  const onCheckBoxChange = (e) => {
    // console.log("Checkbox state [Header]: " + e.target.checked)
  }

  return (
    <header className="container py-3">
      <div className="input-container px-3 text-end">
        <input type="checkbox" className="" id="black-text-checkbox" onChange={(e) => onCheckBoxChange(e)}></input>
        <label className="form-check-label mx-2" htmlFor="black-text-checkbox">Make Font Color Black</label>
      </div>
    </header>
  );
};

export default Header;
