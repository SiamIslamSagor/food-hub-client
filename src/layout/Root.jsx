import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

const Root = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <div className="h-[400vh] bg-gray-300"></div>
    </div>
  );
};

export default Root;
