import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import { BsArrowUpCircle } from "react-icons/bs";
import useContextData from "../hooks/useContextData";

const Root = () => {
  // context data
  const { gooTop } = useContextData();

  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <div className="container mx-auto my-10 text-right">
        <button onClick={gooTop} className={`btn my-4 sticky top-[90vh]`}>
          <BsArrowUpCircle className="text-lg"></BsArrowUpCircle> Goo Top
        </button>
      </div>
      <div className="h-[400vh] bg-gray-300"></div>
    </div>
  );
};

export default Root;
