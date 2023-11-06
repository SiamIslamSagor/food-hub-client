import useFeaturedFoods from "../../hooks/useFeaturedFoods";
import FeaturesFoodsCard from "../FeaturesFoodsCard/FeaturesFoodsCard";
import Loader from "../Lodder/Loader";
import { Link } from "react-router-dom";
import Title from "../Title/Title";

const FeaturesFoods = () => {
  const { data, isLoading } = useFeaturedFoods();
  console.log(data);

  const sortedFoods = data?.sort((a, b) => b?.foodQuantity - a?.foodQuantity);
  const featuresFoods = sortedFoods?.slice(0, 6);
  return (
    <div className="container mx-auto">
      <div className="text-center">
        <Title>Our Featured Foods</Title>
      </div>
      {isLoading && <Loader></Loader>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10">
        {featuresFoods?.map(food => (
          <FeaturesFoodsCard food={food} key={food._id}></FeaturesFoodsCard>
        ))}
      </div>
      <div className="flex justify-center mt-10 mb-5">
        <Link
          to="/available_foods"
          className={`btn px-8 hover:text-[#f86f03] bg-orange-500 outline-none  hover:border-[#f86f03] text-white  hover:bg-transparent hover: hover:border`}
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default FeaturesFoods;
