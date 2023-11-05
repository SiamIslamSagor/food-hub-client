import { useState } from "react";
import { AwesomeButton } from "react-awesome-button";
import { AiFillEye, AiFillEyeInvisible, AiFillPicture } from "react-icons/ai";
import { CgMail } from "react-icons/cg";
import { BsGoogle } from "react-icons/bs";
import { BiSolidUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import registerBgImg from "../../assets/images/footerBg.png";
import "./register.css";
import RegisterAnim from "./RegisterAnim";

const Register = () => {
  const cardBg = {
    backgroundImage: `url(${registerBgImg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  const [passwordType, setPasswordType] = useState(true);
  return (
    <div className="container mx-auto my-auto flex items-center justify-between flex-row-reverse max-lg:flex-col">
      <div
        style={cardBg}
        className="flex-1  rounded-xl max-sm:w-[360px] sm:w-full mx-[20px] max-w-lg bg-[#CDF5FD] py-10
      "
      >
        <h2 className="text-center text-4xl font-bold">Register</h2>
        <form className="p-4">
          <div className="relative">
            <label className="label">
              <span className="label-text font-medium">
                Name <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="name"
              name="name"
              placeholder="Name*"
              className="input focus:outline-none border text-xl py-1 mb-1 w-full pl-5 pr-12 rounded-full "
              required
            />
            <BiSolidUser className="absolute top-12 right-4 text-2xl"></BiSolidUser>
          </div>
          <div className="relative">
            <label className="label">
              <span className="label-text font-medium">
                Profile URL <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="url"
              name="name"
              placeholder="Profile URL*"
              className="input focus:outline-none border text-xl py-1 mb-1 w-full pl-5 pr-12 rounded-full "
              required
            />
            <AiFillPicture className="absolute top-12 right-4 text-2xl"></AiFillPicture>
          </div>
          <div className="relative">
            <label className="label">
              <span className="label-text font-medium">
                Email <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email*"
              className="input focus:outline-none border text-xl py-1 mb-1 w-full pl-5 pr-12 rounded-full "
              required
            />
            <CgMail className="absolute top-12 right-4 text-2xl"></CgMail>
          </div>
          <div className="relative">
            <label className="label">
              <span className="label-text font-medium">
                Password <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              name="password"
              type={passwordType ? "password" : "text"}
              placeholder="Password*"
              className="input focus:outline-none border text-xl py-1 mb-1 w-full pl-5 pr-12 rounded-full "
              required
            />
            {passwordType === true ? (
              <AiFillEyeInvisible
                onClick={() => setPasswordType(!passwordType)}
                className="cursor-pointer absolute top-12 right-4 text-2xl"
              ></AiFillEyeInvisible>
            ) : (
              <AiFillEye
                onClick={() => setPasswordType(!passwordType)}
                className="cursor-pointer absolute top-12 right-4 text-2xl"
              ></AiFillEye>
            )}
          </div>
          <div className="text-left pl-1 text-white">
            <label>
              <input type="checkbox" required />
              &nbsp;Accept Terms & Conditions
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#f86f03] text-white border-none rounded-full hover:bg-white hover:text-[#f86f03]">
              Sign UP
            </button>{" "}
          </div>
        </form>
        <div className="text-center text-white">
          <div>
            <p className="text-lg font-medium ">
              Already have an account?{" "}
              <Link className="text-blue-400 link link-hover" to="/login">
                Login
              </Link>
            </p>
          </div>
          <p className="my-2">or</p>
          <button className="flex items-center gap-2  w-full max-w-[480px] mx-auto justify-center btn text-[#f86f03] bg-white border-none rounded-full hover:bg-[#f86f03] hover:text-white">
            Log In With Google <BsGoogle></BsGoogle>
          </button>
        </div>
      </div>
      <div className="anim-div">
        <RegisterAnim></RegisterAnim>
      </div>
    </div>
  );
};

export default Register;
