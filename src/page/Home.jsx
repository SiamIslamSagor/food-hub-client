import { Helmet } from "react-helmet-async";
import FeaturesFoods from "../components/FeaturesFoods/FeaturesFoods";
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
      <Helmet>
        <title>FoodHub | Home</title>
      </Helmet>
      <Hero></Hero>
      <FeaturesFoods></FeaturesFoods>
      <Slider></Slider>
      <MissionBanner></MissionBanner>
    </div>
  );
};

export default Home;
