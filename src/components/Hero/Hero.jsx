import { AwesomeButton } from "react-awesome-button";
import heroBg from "../../assets/images/FOODHubHero.png";

const Hero = () => {
  const heroBgStyle = {
    backgroundImage: `url(${heroBg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div
      style={heroBgStyle}
      className="-mt-[96px] h-[60vh] sm:h-[70vh] md:h-screen  bg-red-200 "
    >
      <h3 className="text-5xl text-white text-center">helloooo</h3>
      <div className="h-full w-full -mt-6 bg-[#000000a1]">
        <h3 className="text-5xl text-white text-center">helloooo</h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis rem
        fugit quam dignissimos ea ab, a enim sequi officiis consequatur nam
        dolorum molestiae illum corrupti quo dicta delectus maxime ut.
        <div>
          <AwesomeButton>Log in</AwesomeButton>
        </div>
      </div>
    </div>
  );
};

export default Hero;
