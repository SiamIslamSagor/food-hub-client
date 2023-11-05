import { useState } from "react";
import { AwesomeButton } from "react-awesome-button";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { CgMail } from "react-icons/cg";
import { BsGoogle } from "react-icons/bs";
import { Link } from "react-router-dom";
import loginBgImg from "../../assets/images/footbg3.png";
import LoginAnim from "./LoginAnim";

const Login = () => {
  const [passwordType, setPasswordType] = useState(true);
  const cardBg = {
    backgroundImage: `url(${loginBgImg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div className="container mx-auto my-auto flex items-center justify-between flex-row max-lg:flex-col">
      <div
        style={cardBg}
        className=" flex-1 rounded-xl max-sm:w-[360px] sm:w-full mx-[20px] max-w-lg bg-blue-200 py-10"
      >
        <h2 className="text-center text-4xl font-bold">Login</h2>
        <form className="p-4">
          <div className="relative">
            <label className="label">
              <span className="label-text font-medium">
                Email <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email *"
              className="input focus:outline-none border text-xl py-1 mb-1 w-full px-5 rounded-full "
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
              placeholder="Password *"
              className="input focus:outline-none border text-xl py-1 mb-1 w-full px-5 rounded-full "
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
          <div className="pl-1 flex items-center justify-between">
            <label>
              <input type="checkbox" required />
              &nbsp;Remember me
            </label>
            <a className="link link-hover " href="#">
              forgot password?
            </a>
          </div>
          <div className="form-control mt-6">
            <AwesomeButton key={"skjfdlksj"} type="secondary">
              Log In
            </AwesomeButton>
          </div>
        </form>
        <div>
          <p className="text-lg font-medium text-gray-700">
            Don&apos;t have an account?{" "}
            <Link className="text-blue-600 link link-hover" to="/register">
              Register
            </Link>
          </p>
        </div>
        <p className="my-2">or</p>
        <AwesomeButton
          key={"sdflskiiuiuiu"}
          before={<BsGoogle className="text-3xl pr-3"></BsGoogle>}
          type="primary"
        >
          Log In With Google
        </AwesomeButton>
      </div>
      <div className="anim-div">
        <LoginAnim></LoginAnim>
      </div>
    </div>
  );
};

export default Login;
