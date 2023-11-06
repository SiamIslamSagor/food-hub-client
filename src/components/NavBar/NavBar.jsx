import { NavLink, useLocation } from "react-router-dom";
import foodHubLogo from "../../assets/images/foodHubLogo.png";
import "./NavBar.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useEffect, useState } from "react";
import useContextData from "../../hooks/useContextData";
import toast, { Toaster } from "react-hot-toast";

const NavBar = () => {
  // state
  const [mobileNavCall, setMobileNavCall] = useState(false);
  const [navClass, setNavClass] = useState("");
  const [websiteTheme, setWebsiteTheme] = useState("");
  const [themeButtonStyle, setThemeButtonStyle] = useState(false);
  const [dropdownStyle, setDropdownStyle] = useState("text-black");

  // context data
  const { user, logOut } = useContextData();
  // console.log(user);

  const location = useLocation();

  // handler
  const handleLogOut = () => {
    const toastId = toast.loading("processing...");

    logOut()
      .then(() => {
        console.log("log out");
        toast.success("Log Out successfully.", { id: toastId });
      })
      .catch(err => {
        console.log(err);
      });
  };

  // theme toggle function
  const handleThemeToggle = () => {
    // get current theme
    const currentTheme = localStorage.getItem("webTheme");
    // check theme and set toggle theme
    currentTheme === "light"
      ? localStorage.setItem("webTheme", "synthwave")
      : localStorage.setItem("webTheme", "light");
    // change state value
    setWebsiteTheme(currentTheme);
    setThemeButtonStyle(!themeButtonStyle);
  };

  window.addEventListener("scroll", function () {
    if (window.scrollY >= 420) {
      setNavClass("top-0 left-0 w-full bg-[#ffff]");
    } else {
      setNavClass("");
    }
  });

  // set toggle theme when websiteTheme are changed
  useEffect(() => {
    // if in localStorage webTheme not available then set light theme in localStorage
    localStorage.getItem("webTheme") ||
      localStorage.setItem("webTheme", "light");
    // access current theme
    const currentTheme = localStorage.getItem("webTheme");
    // set toggle theme in hole website
    document.querySelector("html").setAttribute("data-theme", currentTheme);

    // set toggle btn dark or light
    currentTheme === "synthwave"
      ? (setThemeButtonStyle(true), setDropdownStyle("text-white"))
      : (setThemeButtonStyle(false), setDropdownStyle("text-black"));
  }, [websiteTheme]);

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
        <NavLink to="/manage_my_foods">Manage food</NavLink>
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
                : window.scrollY >= 420 && "text-black"
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
      <Toaster></Toaster>
      <div className={`  duration-700 ${navClass}`}>
        <div className="py-5 container mx-auto flex justify-between items-center">
          <div className="flex">
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
              {user && (
                <div className="uppercase nav-div max-md:w-full md:text-lg font-semibold">
                  <button
                    onClick={handleLogOut}
                    className={`btn border-[#f86f03] hover:bg-orange-500 outline-none  hover:border-[#f86f03] hover:text-white bg-transparent hover:tw ${
                      location.pathname === "/" && window.scrollY <= 420
                        ? "text-white"
                        : location.pathname === "/" &&
                          window.scrollY >= 420 &&
                          "text-black"
                    } hover:border`}
                  >
                    log Out
                  </button>
                </div>
              )}
              <label className="swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                <input
                  onClick={handleThemeToggle}
                  className="hidden"
                  type="checkbox"
                  // value={true}
                  // checked={false}
                  checked={themeButtonStyle}
                  readOnly
                  // defaultChecked={false}
                />

                {/* sun icon */}
                <svg
                  className={`text-black swap-on fill-current w-10 h-10 ${
                    location.pathname === "/" && window.scrollY >= 420
                      ? "text-black"
                      : location.pathname === "/"
                      ? "text-white"
                      : "text-black"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                {/* moon icon */}
                <svg
                  className={`text-black swap-off fill-current w-10 h-10 ${
                    location.pathname === "/" && window.scrollY >= 420
                      ? "text-black"
                      : location.pathname === "/"
                      ? "text-white"
                      : "text-black"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>

              <div className={`dropdown dropdown-end tew ${dropdownStyle}`}>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699142400&semt=ais" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>

              {/* <div className="avatar">
                <div className="w-12 rounded-full">
                  <img src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699142400&semt=ais" />
                </div>
              </div> */}
              {/* <div className="h-10 w-10 ">
                <img
                  className="rounded-full"
                  src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699142400&semt=ais"
                  alt=""
                />
              </div> */}
            </div>

            <label className="swap swap-rotate xl:hidden">
              {/* this hidden checkbox controls the state */}
              <input
                onClick={handleThemeToggle}
                className="hidden"
                type="checkbox"
                // value={true}
                // checked={false}
                checked={themeButtonStyle}
                readOnly
                // defaultChecked={false}
              />

              {/* sun icon */}
              <svg
                className={`text-black swap-on fill-current w-10 h-10 ${
                  location.pathname === "/" && window.scrollY >= 420
                    ? "text-black"
                    : location.pathname === "/"
                    ? "text-white"
                    : "text-black"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className={`text-black swap-off fill-current w-10 h-10 ${
                  location.pathname === "/" && window.scrollY >= 420
                    ? "text-black"
                    : location.pathname === "/"
                    ? "text-white"
                    : "text-black"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
            {/* <div className="">
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
            </div> */}
          </div>
        </div>
      </div>
      <div
        className={`fixed xl:hidden duration-500 min-h-screen overflow-x-hidden bg-[#c6542d] w-[425px] top-0 -z-10 ${
          mobileNavCall ? "left-0" : "-left-[425px]"
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
