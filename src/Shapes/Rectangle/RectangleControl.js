// RectangleControl.jsx
import React, { useState, useEffect } from "react";
import ShapeSidebar from "../ShapeSidebar";
import Rectangle from "../Rectangle/Rectangle";
import CreateShapeControls from "../CreateShapeControls"; // Update the path

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
      <CreateShapeControls
        isCreatingShape={isCreatingShape}
        onToggleCreateShape={handleToggleCreateShape}
      />
      <Rectangle
        rectangles={rectangles}
        setRectangles={handleShapeCreated}
        isCreatingShape={isCreatingShape}
      />
    </div>
  );
};

export default RectangleControl;
