// YourComponentToShow.jsx
import React, { useEffect, useState } from "react";
import { Close, Crop54, CropDin, Title } from "@mui/icons-material";
import { Link } from "react-router-dom";
import CreateShapeControls from "./CreateShapeControls"; // Update the path

const YourComponentToShow = ({ onCloseClick, handleToggleCreateShape, isCreatingShape  }) => {
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
          {/* <CreateShapeControls
            {...isCreatingShape ? "Clear Shapes" : <Crop54 />}
            onToggleCreateShape={handleToggleCreateShape}
          /> */}
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

export default YourComponentToShow;
