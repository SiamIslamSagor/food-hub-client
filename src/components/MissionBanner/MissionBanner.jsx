import bannerBgImg from "../../assets/images/ourMissionBg.png";
import TypeWriter from "../TypeWriter/TypeWriter";
const MissionBanner = () => {
  const bannerBg = {
    backgroundImage: `url(${bannerBgImg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  const staticText = "";
  const staticTextColor = "";
  const textArray = [
    "Be a Food Hero: Join Our Mission!",
    "Discover the Joy of Giving and Receiving",
    "Your Involvement Matters: Join FoodHub Today",
  ];
  const textArrayColor = "white";
  const cursor = "|";

  return (
    <div style={bannerBg} className="pt-64 pb-8">
      <div className="flex flex-col-reverse lg:flex-row h-full justify-between items-center container mx-auto">
        <div className="flex-1 max-sm:px-2 max-md:mt-4 max-lg:mt-6">
          <h5 className="text-white font-bold text-xl">Support Us!</h5>
          <div className="-mb-12 max-md:-mb-10 md:-mb-7 lg:-mb-1 ">
            <TypeWriter
              staticText={staticText}
              staticTextColor={staticTextColor}
              textArray={textArray}
              textArrayColor={textArrayColor}
              cursor={cursor}
            ></TypeWriter>
          </div>
          <p className="text-white font-medium max-sm:leading-5 md:text-lg">
            At FoodHub, we are on a mission to combat food waste and hunger, and
            we need your help. By becoming a part of our community, you can make
            a significant impact and be a force for good. Whether you have
            surplus food to share or you are in need, FoodHub connects caring
            individuals like you to create a world where no one goes to bed
            hungry.
          </p>
          <button
            className={`btn text-[#f86f03] bg-white outline-none  hover:border-[#f86f03] max-sm:btn-sm mt-8 mb-4`}
          >
            Add Product Now
          </button>{" "}
        </div>
        <div className="flex-1">
          <img
            className="rounded-md w-full lg:w-[580px]"
            src="https://i.ibb.co/nsZx5fV/ass11-1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default MissionBanner;
