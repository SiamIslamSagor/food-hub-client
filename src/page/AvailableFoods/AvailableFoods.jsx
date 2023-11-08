import FeaturesFoodsCard from "../../components/FeaturesFoodsCard/FeaturesFoodsCard";
import Loader from "../../components/Lodder/Loader";
import NoFood from "../../components/Lodder/NoFood";
import Title from "../../components/Title/Title";
import useFeaturedFoods from "../../hooks/useFeaturedFoods";
import { FiSearch } from "react-icons/fi";
import { FaSortNumericDownAlt, FaSortNumericUp } from "react-icons/fa";
import { BiBorderAll } from "react-icons/bi";
import { FiFilter } from "react-icons/fi";
import { useEffect, useState } from "react";
import "./AvailableFoods.css";
import { Helmet } from "react-helmet-async";

const AvailableFoods = () => {
  // foods data
  const { data: loadedData, isLoading } = useFeaturedFoods();
  //state
  const [filteredData, setFilteredData] = useState([]);
  const [typedText, setTypedText] = useState("");
  const [isSorted, setIsSorted] = useState(false);
  const [foodAvailable, setFoodAvailable] = useState(false);

  // handler
  const handleSortByDateMin = () => {
    const sorted = filteredData?.sort(
      (a, b) => new Date(a.expiredDate) - new Date(b.expiredDate)
    );
    setFilteredData(sorted);
    setIsSorted(!isSorted);
  };

  const handleSortByDateMax = () => {
    const sorted = filteredData?.sort(
      (a, b) => new Date(b.expiredDate) - new Date(a.expiredDate)
    );
    setFilteredData(sorted);
    setIsSorted(!isSorted);
  };

  // key press handler
  const handleKeyPress = e => {
    //  if press enter key then call search function
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // search function
  const handleSearch = () => {
    const searchText = typedText;
    // console.log(filteredData);
    const searchResult = loadedData?.filter(food =>
      food.foodName.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
    );
    if (searchResult.length === 0) {
      return setFoodAvailable(true);
    } else {
      setFilteredData(searchResult);
      setFoodAvailable(false);
    }
  };

  useEffect(() => {
    setFilteredData(loadedData && loadedData);
  }, [loadedData, isSorted]);

  return (
    <div className="container mx-auto">
      <Helmet>
        <title>FoodHub | Available Food</title>
      </Helmet>
      <div className="text-center">
        <Title> Available Foods</Title>
      </div>
      <div className="flex justify-center items-center gap-5 max-md:flex-col-reverse">
        <div className="text-center -mt-8 mb-16 flex items-center justify-center relative w-full max-w-xs md:max-w-md">
          <input
            type="text"
            placeholder="Search Food Name Here"
            className="input text-lg input-bordered input-md w-full max-w-xs md:max-w-md"
            value={typedText}
            onChange={e => setTypedText(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button
            onClick={handleSearch}
            className=" absolute right-5 bg-transparent"
          >
            <FiSearch className="text-3xl hover:text-[28px] duration-75"></FiSearch>
          </button>
        </div>
        <div className="dropdown -mt-8 max-md:mb-10 mb-16 ">
          <label
            tabIndex={0}
            className="btn m-1 hover:text-[#f86f03] bg-orange-500 outline-none  hover:border-[#f86f03] text-white  hover:bg-transparent hover: hover:border"
          >
            Filter <FiFilter></FiFilter>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="mb-2" onClick={() => setFilteredData(loadedData)}>
                <BiBorderAll className="text-xl"></BiBorderAll> Show All
              </a>
            </li>
            <li>
              <a className="mb-2" onClick={handleSortByDateMin}>
                <FaSortNumericUp className="text-xl"></FaSortNumericUp> Sort By
                Lowest to Highest Expired Date
              </a>
            </li>
            <li>
              <a className="mb-2" onClick={handleSortByDateMax}>
                <FaSortNumericDownAlt className="text-xl"></FaSortNumericDownAlt>{" "}
                Sort By Highest to Lowest Expired Date
              </a>
            </li>
          </ul>
        </div>{" "}
      </div>
      {foodAvailable ? (
        <NoFood>No food available for this name</NoFood>
      ) : (
        <div>
          {isLoading && <Loader></Loader>}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10">
            {filteredData?.map(food => (
              <FeaturesFoodsCard key={food._id} food={food}></FeaturesFoodsCard>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AvailableFoods;
