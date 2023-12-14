// RectangleControl.jsx
import React, { useState, useEffect } from "react";
import ShapeSidebar from "../ShapeSidebar";
import Rectangle from "../Rectangle/Rectangle";

import { Cancel, Crop54 } from "@mui/icons-material";
// import DraggableTextEditor from "../TextEditor/DraggableTextEditor";

const RectangleControl = () => {
  const [rectangles, setRectangles] = useState([]);
  const [isCreatingShape, setIsCreatingShape] = useState(false);

  useEffect(() => {
    const storedIsCreatingShape = localStorage.getItem("isCreatingShape");
    if (storedIsCreatingShape) {
      setIsCreatingShape(JSON.parse(storedIsCreatingShape));
    }
  }, []);

  const handleShapeCreated = (newRectangles) => {
    setRectangles(newRectangles);
    setIsCreatingShape(false);
    localStorage.removeItem("isCreatingShape");
  };

  const handleToggleCreateShape = () => {
    console.log("handleToggleCreateShape in RectangleControl");
    if (isCreatingShape) {
      setRectangles([]);
      setIsCreatingShape(false);
      localStorage.clear();
    } else {
      setIsCreatingShape(true);
      localStorage.setItem("isCreatingShape", JSON.stringify(true));
    }
  };

  return (
    <div>
      <div style={{ display: "flex", marginTop: "15px", gap: "5px" }}>
        <div>
          <button onClick={handleToggleCreateShape}>
            {isCreatingShape ? <Cancel /> : <Crop54 />}
          </button>
          {isCreatingShape && (
            <p style={{ color: "white", fontSize: "14px", padding: "15px 0" }}>
              Click on the canvas to start drawing rectangles...
            </p>
          )}
        </div>
        <div></div>
        {/* <DraggableTextEditor /> */}
      </div>
      <Rectangle
        rectangles={rectangles}
        setRectangles={handleShapeCreated}
        isCreatingShape={isCreatingShape}
      />
    </div>
  );
};

export default RectangleControl;
