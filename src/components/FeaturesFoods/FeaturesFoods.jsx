import { useQuery } from "@tanstack/react-query";
import useFeaturedFoods from "../../hooks/useFeaturedFoods";
import FeaturesFoodsCard from "../FeaturesFoodsCard/FeaturesFoodsCard";

const FeaturesFoods = () => {
  const { data, isLoading } = useFeaturedFoods();
  console.log(data);
  return (
    <div className="container mx-auto">
      <h2 className="text-center my-10 text-4xl uppercase font-bold underline">
        our featured foods
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10">
        {data?.map(food => (
          <FeaturesFoodsCard food={food} key={food._id}></FeaturesFoodsCard>
        ))}
      </div>
    </div>
  );
};

export default FeaturesFoods;
