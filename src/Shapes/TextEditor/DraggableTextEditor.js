import React, { useState } from "react";
import Draggable from "react-draggable";

const DraggableTextEditor = () => {
  const [text, setText] = useState("");
  const [savedTexts, setSavedTexts] = useState([]);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSave = () => {
    setSavedTexts([...savedTexts, text]);
    setText(""); // Clear the input after saving
  };

  return (
    <div style={{ width: "300px", position: "relative", zIndex: "1" }}>
      <input
        value={text}
        onChange={handleTextChange}
        placeholder="Type your text here..."
        style={{ width: "100%", resize: "none" }}
      />
      <div>
        {savedTexts.map((savedText, index) => (
          <Draggable key={index}>
            <pre style={{ color: "white", fontSize: "14px" }}>{savedText}</pre>
          </Draggable>
        ))}
      </div>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default DraggableTextEditor;
