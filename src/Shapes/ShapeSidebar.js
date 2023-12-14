// ShapeSidebar.jsx
import React, { useState } from "react";
import { AddCircle } from "@mui/icons-material";
import YourComponentToShow from "./YourComponentToShow";

const ShapeSidebar = () => {
  const [isComponentVisible, setIsComponentVisible] = useState(false);

  const toggleVisibility = () => {
    setIsComponentVisible(!isComponentVisible);
  };

  const handleToggleCreateShape = () => {
    // Add logic for toggling shape creation in RectangleControl
    console.log("handleToggleCreateShape in ShapeSidebar");
  };

  return (
    <div>
      <AddCircle onClick={toggleVisibility}>
        {isComponentVisible ? <AddCircle /> : <AddCircle />}
      </AddCircle>
      {isComponentVisible && (
        <YourComponentToShow
          onCloseClick={toggleVisibility}
          handleToggleCreateShape={handleToggleCreateShape}
        />
      )}
    </div>
  );
};

export default ShapeSidebar;
