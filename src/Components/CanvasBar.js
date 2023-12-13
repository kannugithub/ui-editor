// RightSidebar.js
import React, { useState } from "react";
// import DrawingCanvas from "./DrawingCanvas";
import { useDrawing } from "../ContextWrapper/DrawingContext";

import Rectangle from "../Shapes/Rectangle";
import Draggable from "react-draggable";
// import CanvasWithText from "../Shapes/CanvasWithText";

const CanvasBar = () => {
  const [rectangles, setRectangles] = useState([]);
  const [isCreatingShape, setIsCreatingShape] = useState(false);


//   const [showCanvas, setShowCanvas] = useState(false);

//   const handleTitleClick = () => {
//     setShowCanvas(!showCanvas);
//   };

const handleShapeCreated = (newRectangles) => {
  setRectangles(newRectangles);
  setIsCreatingShape(false);
  localStorage.removeItem("isCreatingShape");
};

  return (
    
    <div>
      <Rectangle rectangles={rectangles}
        setRectangles={handleShapeCreated}
        isCreatingShape={isCreatingShape} />
    </div>
   
  );
};

export default CanvasBar;
