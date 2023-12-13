import React, { useState, useRef } from "react";
import { Stage, Layer, Rect, Text } from "react-konva";
import { saveAs } from "file-saver";

const Rectangle = ({ isCreatingShape, onShapeCreated }) => {
  const [rectangles, setRectangles] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentRect, setCurrentRect] = useState(null);
  const [selectedRectIndex, setSelectedRectIndex] = useState(null);
  const drawingRef = useRef(null);

  const handleMouseDown = () => {
    if (!isCreatingShape) return;

    setIsDrawing(true);
    const stage = drawingRef.current.getStage();
    const pointerPos = stage.getPointerPosition();

    setCurrentRect({
      x: pointerPos.x,
      y: pointerPos.y,
      width: 0,
      height: 0,
    });
  };

  const handleMouseMove = () => {
    if (!isDrawing || !isCreatingShape) return;

    const stage = drawingRef.current.getStage();
    const pointerPos = stage.getPointerPosition();

    setCurrentRect((prevRect) => ({
      ...prevRect,
      width: pointerPos.x - prevRect.x,
      height: pointerPos.y - prevRect.y,
    }));
  };

  const handleMouseUp = () => {
    if (!isDrawing || !isCreatingShape) return;

    setIsDrawing(false);
    if (currentRect) {
      setRectangles([...rectangles, currentRect]);
      setCurrentRect(null);

      // Notify the parent component that a shape has been created
      if (onShapeCreated) {
        onShapeCreated([...rectangles, currentRect]);
      }
    }
  };

  const handleRectDragEnd = (index, e) => {
    const updatedRectangles = rectangles.slice();
    updatedRectangles[index].x = e.target.x();
    updatedRectangles[index].y = e.target.y();
    setRectangles(updatedRectangles);
  };

  const handleRectClick = (index) => {
    setSelectedRectIndex(index);
  };

  const handleDeleteClick = () => {
    if (selectedRectIndex !== null) {
      const updatedRectangles = rectangles.slice();
      updatedRectangles.splice(selectedRectIndex, 1);
      setRectangles(updatedRectangles);
      setSelectedRectIndex(null);
    }
  };

  const handleSave = () => {
    // Check if there are rectangles to save
    if (rectangles.length === 0) {
      alert("Nothing to save. Please create a shape first.");
      return;
    }

    // Convert the rectangles to JSON and save it as a file
    const jsonContent = JSON.stringify(rectangles);
    const blob = new Blob([jsonContent], { type: "application/json" });
    saveAs(blob, "rectangles.json");
  };

  return (
    <div>
      <button onClick={handleSave}>Save</button>
      <Stage
        width={1000}
        height={600}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        ref={drawingRef}
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "0 auto",
          cursor: "crosshair",
        }}
      >
        <Layer>
          {rectangles.map((rect, index) => (
            <React.Fragment key={index}>
              <Rect
                x={rect.x}
                y={rect.y}
                width={rect.width}
                height={rect.height}
                fill={selectedRectIndex === index ? "blue" : "red"}
                draggable
                onDragEnd={(e) => handleRectDragEnd(index, e)}
                onClick={() => handleRectClick(index)}
              />
              {selectedRectIndex === index && (
                <Text
                  text="Delete"
                  x={rect.x + rect.width + 5}
                  y={rect.y - 15}
                  fontSize={10}
                  onClick={handleDeleteClick}
                  fill="blue"
                  listening={true}
                  style={{ cursor: "pointer" }} // Add this line to set the cursor style
                />
              )}
            </React.Fragment>
          ))}
          {currentRect && (
            <Rect
              x={currentRect.x}
              y={currentRect.y}
              width={currentRect.width}
              height={currentRect.height}
              fill="red"
            />
          )}
        </Layer>
      </Stage>
    </div>
  );
};

export default Rectangle;
