import React, { useState, useEffect } from "react";
import Rectangle from "../Rectangle/Rectangle";
import {Crop54} from "@mui/icons-material";

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
    if (isCreatingShape) {
      // If currently creating shapes, clear them
      setRectangles([]);
      setIsCreatingShape(false);
      localStorage.clear();
    } else {
      // If not creating shapes, start creating
      setIsCreatingShape(true);
      localStorage.setItem("isCreatingShape", JSON.stringify(true));
    }
  };

  return (
    <div>
      <button onClick={handleToggleCreateShape}>
        {isCreatingShape ? "Clear Shapes" : <Crop54 />}
      </button>
      {isCreatingShape && (
        <p>Click on the canvas to start drawing rectangles...</p>
      )}
      <Rectangle
        rectangles={rectangles}
        setRectangles={handleShapeCreated}
        isCreatingShape={isCreatingShape}
      />
    </div>
  );
};

export default RectangleControl;
