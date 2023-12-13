import logo from "./logo.svg";
import "./Assets/Scss/style.scss";
import Header from "./Components/Header";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Outlet,
} from "react-router-dom";
import RectangleControl from "./Shapes/Rectangle/RectangleControl";
import TextEditor from "./Shapes/CanvasWithText";
import DraggableTextEditor from "./Shapes/Rectangle/TextEditor/DraggableTextEditor";


function App() {
 

  return (
    <div className="App">
     <Header />
     <DraggableTextEditor />
     <RectangleControl />
    </div>
  );
}

export default App;
