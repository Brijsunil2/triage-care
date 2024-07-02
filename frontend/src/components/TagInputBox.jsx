import { useState } from "react";
import "../styles/TagInputBox.css";
import { IoMdClose } from "react-icons/io";

const TagInputBox = ({ values, placeholder }) => {
  const [tags, setTags] = useState(values);
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault();
      setTags([...tags, inputValue.trim()]);
      values.push(inputValue.trim());
      setInputValue("");
    }
  };

  const removeTag = (index) => {
    const foundIndex = values.findIndex((value) => value === tags[index])
    values.splice(foundIndex, 1);
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
            <button type="button" onClick={() => removeTag(index)}>
              <IoMdClose />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TagInputBox;
