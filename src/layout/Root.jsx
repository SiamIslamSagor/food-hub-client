import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import GooTop from "../components/GooTop/GooTop";
import WebFooter from "../components/Footer/WebFooter";

const Root = () => {
  // context data

  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <GooTop></GooTop>
      <WebFooter></WebFooter>
      {/* <div className="h-[400vh] bg-gray-300"></div> */}
    </div>
  );
};

export default Root;
