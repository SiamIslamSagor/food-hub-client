import FeaturesFoodsCard from "../../components/FeaturesFoodsCard/FeaturesFoodsCard";
import Loader from "../../components/Lodder/Loader";
import NoFood from "../../components/Lodder/NoFood";
import Title from "../../components/Title/Title";
import useFeaturedFoods from "../../hooks/useFeaturedFoods";
import { FiSearch } from "react-icons/fi";
import { FaSortNumericUp } from "react-icons/fa";
import { useEffect, useState } from "react";

const AvailableFoods = () => {
  // foods data
  const { data: loadedData, isLoading } = useFeaturedFoods();
  //state
  console.log(loadedData);
  const [filteredData, setFilteredData] = useState([]);
  const [isSorted, setIsSorted] = useState(false);

  // handler
  const handleSortByDate = () => {
    const sorted = filteredData?.sort(
      (a, b) => new Date(a.expiredDate) - new Date(b.expiredDate)
    );
    setFilteredData(sorted);
    setIsSorted(!isSorted);
  };

  useEffect(() => {
    setFilteredData(loadedData && loadedData);
  }, [loadedData, isSorted]);

  return (
    <div className="container mx-auto">
      <div className="text-center">
        <Title> Available Foods</Title>
      </div>
      <div className="flex justify-center items-center gap-5 max-md:flex-col-reverse">
        <div className="text-center -mt-8 mb-16 flex items-center justify-center relative w-full max-w-xs md:max-w-md">
          <input
            type="text"
            placeholder="Search Food Name Here"
            className="input input-bordered input-md w-full max-w-xs md:max-w-md"
          />
          <button className=" absolute right-5 bg-transparent">
            <FiSearch className="text-3xl hover:text-[28px] duration-75"></FiSearch>
          </button>
        </div>
        <button
          onClick={handleSortByDate}
          className={`-mt-8 max-md:mb-10 mb-16 btn px-8 hover:text-[#f86f03] bg-orange-500 outline-none  hover:border-[#f86f03] text-white  hover:bg-transparent hover: hover:border`}
        >
          Sort By Expired Date <FaSortNumericUp></FaSortNumericUp>
        </button>
        {/* <button>Sort By expired Date</button> */}
      </div>
      {/* <NoFood></NoFood> */}
      {isLoading && <Loader></Loader>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10">
        {filteredData?.map(food => (
          <FeaturesFoodsCard key={food._id} food={food}></FeaturesFoodsCard>
        ))}
      </div>
    </div>
  );
};

export default AvailableFoods;
