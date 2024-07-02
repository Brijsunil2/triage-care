import { useEffect, useState } from "react";
import "../styles/TagInputBox.css";
import { IoMdClose } from "react-icons/io";

const TagInputBox = ({values, placeholder}) => {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    values = [...tags];
  }, [tags])

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault();
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };

  const removeTag = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  return (
    <div className="tag-input-container">
      <input
        className="form-control"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
      />

      <div className="tags-list">
        {tags.map((tag, index) => (
          <div className="tag" key={index}>
            <span>{tag}</span>
            <button type="button" onClick={() => removeTag(index)}><IoMdClose /></button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TagInputBox;
