import React, { useState } from "react";

const TextEditor = () => {
  const [content, setContent] = useState("");
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);

  const handleBoldClick = () => {
    setIsBold(!isBold);
  };

  const handleItalicClick = () => {
    setIsItalic(!isItalic);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <div className="text-editor">
      <div className="toolbar">
        <button onClick={handleBoldClick} className={isBold ? "active" : ""}>
          B
        </button>
        <button
          onClick={handleItalicClick}
          className={isItalic ? "active" : ""}
        >
          I
        </button>
      </div>
      <textarea
        value={content}
        onChange={handleContentChange}
        style={{
          fontWeight: isBold ? "bold" : "normal",
          fontStyle: isItalic ? "italic" : "normal",
        }}
      />
    </div>
  );
};

export default TextEditor;
