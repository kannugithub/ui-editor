// CreateShapeControls.jsx
import React from "react";
import { Crop54, Cancel } from "@mui/icons-material";
import DraggableTextEditor from "../Shapes/TextEditor/DraggableTextEditor";

const CreateShapeControls = ({ isCreatingShape, onToggleCreateShape }) => {
  return (
    <div style={{display: "flex", marginTop: "15px", gap: "5px"}}>
      <div>
      <button onClick={onToggleCreateShape}>
        {isCreatingShape ? <Cancel /> : <Crop54 />} 
      </button>
      {isCreatingShape && <p style={{color: "white", fontSize: "14px", padding: "15px 0"}} >Click on the canvas to start drawing rectangles...</p>}
      </div>
      <div>
      <DraggableTextEditor />
      </div>
    </div>
  );
};

export default CreateShapeControls;
