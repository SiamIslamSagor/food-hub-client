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
      <h3>this is hero</h3>
      <div className="h-full w-full -mt-6 bg-[#0000008e]"></div>
    </div>
  );
};

export default Hero;
