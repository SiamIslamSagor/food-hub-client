import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible, AiFillPicture } from "react-icons/ai";
import { CgMail } from "react-icons/cg";
import { BsGoogle } from "react-icons/bs";
import { BiSolidUser } from "react-icons/bi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import registerBgImg from "../../assets/images/footerBg.png";
import "./register.css";
import RegisterAnim from "./RegisterAnim";
import TypeWriter from "../TypeWriter/TypeWriter";
import useContextData from "../../hooks/useContextData";
import toast, { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const Register = () => {
  // state
  const [passwordType, setPasswordType] = useState(true);

  // navigate prev page
  const location = useLocation();
  const navigate = useNavigate();
  // context data
  const { createUser, googleLogin, updateUserData, setLoading, loading } =
    useContextData();

  // click handler
  const handleSubmit = e => {
    // pending toast
    const toastId = toast.loading("processing...");

    // form data
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoUrl.value;

    // password validation
    if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z!@#$%^&*\d]{6,}$/.test(password)) {
      return toast(
        "Please provide password they have at least 6 characters long, contain one uppercase letter, and have  one special character.",
        { id: toastId }
      );
    }

    // crete user account
    createUser(email, password)
      .then(res => {
        console.log(res.user);
        // update user data
        updateUserData(name, photoUrl)
          .then(() => {
            setLoading(!loading);
            form.reset();
            navigate(location.state ? location.state : "/");
          })
          .catch(err => {
            console.log(err);
          });
        toast.success("Account created successfully.", { id: toastId });
      })
      .catch(() => {
        toast.error("Failed to create account.", { id: toastId });
      });
  };

  // google handler
  const handleGoogleSignIn = () => {
    const toastId = toast.loading("processing...");

    googleLogin()
      .then(res => {
        setLoading(!loading);
        console.log(res.user);
        toast.success("Sign In successfully.", { id: toastId });
        navigate(location.state ? location.state : "/");
      })
      .catch(() => {
        toast.error("Sign In Failed.", { id: toastId });
      });
  };

  const cardBg = {
    backgroundImage: `url(${registerBgImg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  const staticText = "";
  const staticTextColor = "text-blue-500";
  const textArray = ["Register Here!", "Sign Up Here!"];
  const textArrayColor = "orange";
  const cursor = "|";

  return (
    <div className="container mx-auto my-auto flex items-center justify-between flex-row-reverse max-lg:flex-col">
      <Helmet>
        <title>FoodHub | Register</title>
      </Helmet>
      <Toaster></Toaster>
      <div
        style={cardBg}
        className="flex-1  rounded-xl max-sm:w-[360px] sm:w-full mx-[20px] max-w-lg bg-[#CDF5FD] py-10
      "
      >
        <div className=" flex items-center justify-center -mb-10">
          <TypeWriter
            staticText={staticText}
            staticTextColor={staticTextColor}
            textArray={textArray}
            textArrayColor={textArrayColor}
            cursor={cursor}
          ></TypeWriter>
        </div>
        <form onSubmit={handleSubmit} className="p-4">
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

          <div className="relative">
            <label className="label">
              <span className="label-text font-medium">
                Profile URL <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="url"
              name="photoUrl"
              placeholder="Profile URL*"
              className="input focus:outline-none border text-xl py-1 mb-1 w-full pl-5 pr-12 rounded-full "
              required
            />
            <AiFillPicture className="absolute top-12 right-4 text-2xl"></AiFillPicture>
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
          <button
            onClick={handleGoogleSignIn}
            className="flex items-center gap-2  w-full max-w-[480px] mx-auto justify-center btn text-[#f86f03] bg-white border-none rounded-full hover:bg-[#f86f03] hover:text-white  max-sm:w-[328px]"
          >
            <BsGoogle></BsGoogle> Log In With Google
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
