import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Replay, AddCircle } from "@mui/icons-material";
import RectangleDrawer from "../Shapes/Rectangle";
import DrawingButton from "../Shapes/DrawingButton";
import ShapeSidebar from "../Shapes/ShapeSidebar";

const LeftSidebar = ({ onStartDrawing, onStopDrawing }) => {

  const [isComponentVisible, setIsComponentVisible] = useState(false);

  const toggleVisibility = () => {
    setIsComponentVisible(!isComponentVisible );
  };
  //   const [drawingActive, setDrawingActive] = useState(false);

  //   const handleStartDrawing = () => {
  //     setDrawingActive(true);
  //   };

  //   const handleStopDrawing = () => {
  //     setDrawingActive(false);
  //   };

  return (
    <>
      <div className="main-list">
        <div className="title-list">
          <div className="left-sec">
            <p>Screen</p>
          </div>
          <div className="right-sec">
            <span className="rotate">
              <Replay />
            </span>
            <span>
              <AddCircle />
            </span>
          </div>
        </div>
        <ul className="list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/checkout">Checkout</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>

        <div className="title-list">
          <div className="left-sec">
            <p>Components</p>
          </div>
          <div className="right-sec">
            <span className="rotate">
              <Replay />
            </span>

            {/* <span>
              <AddCircle
                id="openBtn" onClick={toggleSidebar}
              />
            </span> */}
                {/* <span id="openBtn" onClick={toggleVisibility}>
                <AddCircle />
              </span> */}
              <ShapeSidebar />


          </div>
        </div>
        <ul className="component-list">
        </ul>
      </div>
    </>
  );
};

export default LeftSidebar;
