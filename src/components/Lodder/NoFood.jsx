import airplaneAnim from "../../assets/animSVG/pleanAnim.json";
import Lottie from "lottie-react";
const NoFood = () => {
  return (
    <div className="container mx-auto flex-col h-screen flex justify-center items-center">
      <div className="loading-anim-div mx-auto -mt-80">
        <Lottie animationData={airplaneAnim} loop={true}></Lottie>
      </div>
      <div>
        <p className="text-center text-6xl -mt-4 tracking-tight">Ops!</p>
        <p className="text-3xl text-center mt-2">
          No food available for this name
        </p>
      </div>
    </div>
  );
};

export default NoFood;
