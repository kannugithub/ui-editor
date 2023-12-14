import "./Assets/Scss/style.scss";
import Header from "./Components/Header";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Outlet,
} from "react-router-dom";
import RectangleControl from "./Shapes/Rectangle/RectangleControl";
import DraggableTextEditor from "./Shapes/TextEditor/DraggableTextEditor";
import LeftSidebar from "./Components/LeftSidebar";
import Home from "./Components/Home"
import AboutUs from "./Components/AboutUs"
import Blog from "./Components/Blog"
import ContactUs from "./Components/ContactUs"
import Shop from "./Components/Shop"
import Checkout from "./Components/Checkout"
import Login from "./Components/Login"
import Register from "./Components/Register"
import Rectangle from "./Shapes/Rectangle/Rectangle";
import RightSidebar from "./Components/RightSidebar";


function App() {

  const LeftSidebarRoute = () =>{
    
    return(
      <>
      <div className="main-sec">
      <div className="leftside">
       <LeftSidebar />
       </div>
       <div className="middleside" style={{color: "white"}}>
        <Outlet />
        {/* <DraggableTextEditor /> */}
        <RectangleControl />
       </div>
       <div className="rightside">
          <RightSidebar />
       </div>
      </div>

      </>
    )
  }
 

  return (
    <div className="App">
     <Header />
     <Router>

      <Routes>
        <Route element={<LeftSidebarRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="checkout/" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
