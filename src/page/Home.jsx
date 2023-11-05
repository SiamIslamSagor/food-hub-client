import Hero from "../components/Hero/Hero";
import MissionBanner from "../components/MissionBanner/MissionBanner";
import Slider from "../components/Slider/Slider";

const Home = () => {
  return (
    <div className="">
      <Hero></Hero>
      {/* <div className="h-40"></div> */}
      {/* <Slider></Slider> */}
      <MissionBanner></MissionBanner>
    </div>
  );
};

export default Home;
