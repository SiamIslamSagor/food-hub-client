import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import GooTop from "../components/GooTop/GooTop";
import WebFooter from "../components/Footer/WebFooter";

const Root = () => {
  // context data

  return (
    <div>
      <NavBar></NavBar>
      <div className="bg-base-200 pb-6">
        <Outlet></Outlet>
      </div>
      {/* <GooTop></GooTop> */}
      <WebFooter></WebFooter>
      {/* <div className="h-[400vh] bg-gray-300"></div> */}
    </div>
  );
};

export default Root;
