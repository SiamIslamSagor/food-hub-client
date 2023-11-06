import Lottie from "lottie-react";
import loadingAnim from "../../assets/animSVG/loadingAnim.json";
import "./loader.css";
const Loader = () => {
  return (
    <div className="container mx-auto h-screen flex justify-center items-center">
      <div className="loading-anim-div mx-auto">
        <Lottie animationData={loadingAnim} loop={true}></Lottie>;
      </div>
    </div>
  );
};

export default Loader;
