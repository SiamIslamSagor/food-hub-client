import Hero from "../components/Hero/Hero";
import MissionBanner from "../components/MissionBanner/MissionBanner";
import Slider from "../components/Slider/Slider";
import useContextData from "../hooks/useContextData";

const Home = () => {
  // context data
  const { gooTop } = useContextData();

  gooTop();

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
