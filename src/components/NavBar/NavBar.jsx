import { NavLink, useLocation } from "react-router-dom";
import foodHubLogo from "../../assets/images/foodHubLogo.png";
import "./NavBar.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import useContextData from "../../hooks/useContextData";

const NavBar = () => {
  // state
  const [mobileNavCall, setMobileNavCall] = useState(false);
  const [navClass, setNavClass] = useState("");

  // context data
  const { user } = useContextData();
  // console.log(user);

  const location = useLocation();

  window.addEventListener("scroll", function () {
    if (window.scrollY >= 420) {
      setNavClass("top-0 left-0 w-full bg-[#ffff]");
    } else {
      setNavClass("");
    }
  });

  const links = (
    <>
      <div className="uppercase nav-div max-md:w-full md:text-lg font-semibold">
        <NavLink to="/">HOME</NavLink>
      </div>

      <div className="uppercase nav-div max-md:w-full md:text-lg font-semibold">
        <NavLink to="/available_foods">AVAILABLE FOODS</NavLink>
      </div>

      <div className="uppercase nav-div max-md:w-full md:text-lg font-semibold">
        <NavLink to="/add_food">ADD FOOD</NavLink>
      </div>

      <div className="uppercase nav-div max-md:w-full md:text-lg font-semibold">
        <NavLink to="/manage_food">Manage food</NavLink>
      </div>

      <div className="uppercase nav-div max-md:w-full md:text-lg font-semibold">
        <NavLink to="/my_food_request">my food request</NavLink>
      </div>

      {user === null && (
        <div className="uppercase nav-div max-md:w-full md:text-lg font-semibold">
          <NavLink
            to="/login"
            className={`btn border-[#f86f03] hover:bg-orange-500 outline-none  hover:border-[#f86f03] hover:text-white bg-transparent hover:tw ${
              location.pathname === "/" && window.scrollY <= 420
                ? "text-white"
                : location.pathname === "/" &&
                  window.scrollY >= 420 &&
                  "text-black"
            } hover:border`}
          >
            login
          </NavLink>
        </div>
      )}
      {user === null && (
        <div className="uppercase nav-div max-md:w-full md:text-lg font-semibold">
          <NavLink
            to="/register"
            className={`btn border-[#f86f03] bg-orange-500 outline-none  hover:border-[#f86f03] text-white  hover:bg-transparent hover:tw ${
              location.pathname === "/" && window.scrollY <= 420
                ? "text-white"
                : "hover:text-black"
            } hover:border`}
          >
            Sign Up
          </NavLink>
        </div>
      )}
    </>
  );

  return (
    <div className=" sticky top-0 z-10 duration-700">
      <div className={`  duration-700 ${navClass}`}>
        <div className="py-5 container mx-auto flex justify-between items-center">
          <div className="">
            <img className="h-14" src={foodHubLogo} alt="logo" />
          </div>
          <div className="">
            <div
              className={`hidden xl:flex items-center gap-6 2xl:gap-10 ${
                location.pathname === "/" && window.scrollY >= 420
                  ? "text-black"
                  : location.pathname === "/"
                  ? "text-white"
                  : "text-black"
              }`}
            >
              {links}
            </div>
            <div className="">
              <button
                onClick={() => setMobileNavCall(!mobileNavCall)}
                tabIndex={0}
                className="btn btn-ghost xl:hidden"
              >
                {mobileNavCall ? (
                  <AiOutlineClose
                    className={`text-3xl ${
                      location.pathname === "/" && window.scrollY >= 420
                        ? "text-black"
                        : location.pathname === "/"
                        ? "text-white"
                        : "text-black"
                    }`}
                  ></AiOutlineClose>
                ) : (
                  <AiOutlineMenu
                    className={`text-3xl ${
                      location.pathname === "/" && window.scrollY >= 420
                        ? "text-black"
                        : location.pathname === "/"
                        ? "text-white"
                        : "text-black"
                    }`}
                  ></AiOutlineMenu>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed xl:hidden duration-500 min-h-screen overflow-x-hidden bg-[#c6542d] w-[425px] top-0 -z-10 ${
          mobileNavCall ? "right-0" : "-right-[425px]"
        }`}
      >
        <div className="mt-[140px] text-center flex flex-col items-center gap-4 text-white">
          {links}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
