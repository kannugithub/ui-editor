import React, { useState } from "react";
import Draggable from "react-draggable";

const DraggableTextEditor = () => {
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Draggable>
      <div
        style={{padding: "10px", width: "300px", position: "relative", zIndex: "1" }}
      >
        <input
          value={text}
          onChange={handleTextChange}
          placeholder="Type your text here..."
          style={{ width: "100%", resize: "none" }}
        />
        <div>
          <pre>{text}</pre>
        </div>
      </div>
    </Draggable>
  );
};

export default DraggableTextEditor;
