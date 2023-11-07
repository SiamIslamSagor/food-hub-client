import FeaturesFoods from "../components/FeaturesFoods/FeaturesFoods";
import Hero from "../components/Hero/Hero";
import Loader from "../components/Lodder/Loader";
import MissionBanner from "../components/MissionBanner/MissionBanner";
import MyTable from "../components/MyTable/MyTable";
import Slider from "../components/Slider/Slider";
import useContextData from "../hooks/useContextData";

const Home = () => {
  // context data
  const { gooTop } = useContextData();

  // gooTop();

  return (
    <div className="">
      <Hero></Hero>
      {/* <Loader></Loader> */}
      <FeaturesFoods></FeaturesFoods>
      {/* <div className="h-40"></div> */}
      {/* <Slider></Slider> */}
      {/* <MissionBanner></MissionBanner> */}
    </div>
  );
};

export default Home;
