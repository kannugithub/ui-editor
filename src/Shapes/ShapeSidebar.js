import React, { useEffect, useState } from "react";
import { Close, AddCircle, CropDin, Title } from "@mui/icons-material";
// import { useDrawing } from "../ContextWrapper/DrawingContext";
// import CanvasWithText from "./CanvasWithText";
import { Link } from "react-router-dom";

const ShapeSidebar = () => {
  const [isComponentVisible, setIsComponentVisible] = useState(false);

  const toggleVisibility = () => {
    setIsComponentVisible(!isComponentVisible);
  };

  return (
    <div>
      <AddCircle onClick={toggleVisibility}>
        {isComponentVisible ? <AddCircle /> : <AddCircle />}
      </AddCircle>
      {isComponentVisible && (
        <YourComponentToShow onCloseClick={toggleVisibility} />
      )}
    </div>
  );
};

export const YourComponentToShow = ({ onCloseClick, onToggleCreateShape }) => {
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
    console.log("handleToggleCreateShape");
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
    <div className="tools-sec">
      <div className="inner-tools">
        <div className="title-sec">
          <span>Add Components</span>
          <span>
            <Close onClick={onCloseClick} />
          </span>
        </div>
        <div className="shape-tools">
          <div className="inner">
            <ul className="list">
              <li>Bits</li>
              <li>Blocks</li>
            </ul>
            <ul className="list2">
              <li>
                <Link onClick={handleToggleCreateShape}>
                  <CropDin />
                  Rectangle
                </Link>
              </li>
              <li>
                <Link>
                  <Title />
                  Text
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShapeSidebar;
