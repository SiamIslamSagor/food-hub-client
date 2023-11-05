import logAnim from "../../assets/animSVG/loginAnim.json";
import Lottie from "lottie-react";

const LoginAnim = () => {
  return <Lottie animationData={logAnim} loop={true}></Lottie>;
};

export default LoginAnim;
