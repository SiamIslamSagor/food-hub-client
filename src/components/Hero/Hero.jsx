/* eslint-disable react/no-unescaped-entities */
// import { AwesomeButton } from "react-awesome-button";
import heroBg from "../../assets/images/FOODHubHero.png";
import TypeWriter from "../TypeWriter/TypeWriter";

const Hero = () => {
  const heroBgStyle = {
    backgroundImage: `url(${heroBg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  const staticText = "WELCOME TO FOODHUB: ";
  const staticTextColor = "text-blue-500";
  const textArray = [
    "Join the Movement for a Hunger-Free World",
    "Nourish Your Community, Reduce Food Waste",
    "Share a Meal, Share a Smile",
    "Share Love, Share Food, Share Life",
  ];
  const textArrayColor = "orange";
  const cursor = "_";

  return (
    <div
      style={heroBgStyle}
      className="-mt-[96px] relative h-[60vh] sm:h-[70vh] md:h-[911px]  bg-red-200 "
    >
      <div className="w-full h-full absolute bg-[#000000a1]">
        <div className="container mx-auto max-sm:mt-28 sm:mt-36 md:mt-72 lg:mt-96 text-white">
          <div className=" md:max-w-[60%] max-sm:px-2 sm:mx-4 lg:mx-6">
            {/* <h1 className="max-sm:text-2xl sm:text-3xl sm:mb-4 max-sm:mb-3 max-sm:leading-7 tracking-tight  font-medium md:text-4xl">
              hello <br />
              hhjggjhghjgj <br />
              hihfhhsjdfh <br />
              hihfhhsjdfh
            </h1> */}
            <TypeWriter
              staticText={staticText}
              staticTextColor={staticTextColor}
              textArray={textArray}
              textArrayColor={textArrayColor}
              cursor={cursor}
            ></TypeWriter>
            <p className="mb-8 leading-4 font-normal md:text-xl md:font-medium">
              Welcome to FoodHub, where we turn surplus into smiles. We're on a
              mission to create a world where no one goes to bed hungry. Our
              platform connects the generous hearts of Bangladesh, making it
              easy to share excess food with those who need it most. Join our
              growing community, and let's serve up kindness, one meal at a
              time.
            </p>
            <button className="btn max-sm:btn-sm btn-outline btn-warning font-bold">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
