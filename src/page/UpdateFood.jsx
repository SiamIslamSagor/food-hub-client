import { MdOutlineUpdate } from "react-icons/md";
import Title from "../components/Title/Title";
import useContextData from "../hooks/useContextData";
import { useEffect, useState } from "react";
import { getClickFoodIdInLs } from "../utils/localStorage";
import axios from "axios";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const UpdateFood = () => {
  // context data
  const { user } = useContextData();

  //   state
  const [updateFood, setUpdateFood] = useState("");
  const [foodId, setFoodId] = useState("");

  //
  const {
    foodImg,
    foodName,
    foodQuantity,
    expiredDate,
    additionalNotes,
    pickupLocation,
    hexString,
  } = updateFood;

  const handleSubmit = e => {
    const toastId = toast.loading("processing...");

    e.preventDefault();
    // get form data
    const form = e.target;
    const foodImage = form.foodImage.value;
    const foodName = form.foodName.value;
    const foodQuantity = form.foodQuantity.value;
    const expiredDate = form.expiredDate.value;
    const additionalNotes = form.additionalNotes.value;
    const pickupLocation = form.pickupLocation.value;
    const foodStatus = form.foodStatus.value;

    const UpdatedFoodInfo = {
      foodImg: foodImage,
      foodName,
      foodQuantity,
      expiredDate,
      additionalNotes,
      pickupLocation,
      foodStatus,
      donarImg: user?.photoURL || "Not Given",
      donarName: user?.displayName || "Not Given",
      donarEmail: user?.email || "Not Given",
    };
    console.log(UpdatedFoodInfo);

    // send updated food in server side and database
    axios
      .patch(
        `https://food-hub-server-hazel.vercel.app/update_food/${foodId}`,
        UpdatedFoodInfo,
        {
          withCredentials: true,
        }
      )
      .then(() => {
        // send updated food in server side and database foods collection
        axios
          .patch(
            `https://food-hub-server-hazel.vercel.app/update_food_in_foodsCollection/${hexString}`,
            UpdatedFoodInfo,
            {
              withCredentials: true,
            }
          )
          .then(() => {
            toast.success("Food Update successfully.", { id: toastId });
          })
          .catch(() => {
            toast.error("Food Update Failed.", { id: toastId });
          });
      })
      .catch(() => {
        toast.error("Food Update Failed.", { id: toastId });
      });
  };

  useEffect(() => {
    // get food id
    const updateFoodId = getClickFoodIdInLs();
    setFoodId(updateFoodId);
    // get food all info
    axios
      .get(
        `https://food-hub-server-hazel.vercel.app/added_food_find/${updateFoodId}`,
        {
          withCredentials: true,
        }
      )
      .then(res => {
        setUpdateFood(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container mx-auto">
      <Helmet>
        <title>FoodHub | Update a Food</title>
      </Helmet>
      <Title>Update Your Food</Title>
      <div className="flex items-center justify-center max-sm:px-2">
        <form
          onSubmit={handleSubmit}
          className="w-full max-sm:max-w-lg sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl"
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2">
                Food Image
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-600 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="url"
                defaultValue={foodImg}
                placeholder="Food Image"
                required
                name="foodImage"
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2 mt-2">
                Food Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-600 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                defaultValue={foodName}
                name="foodName"
                placeholder="Food Name"
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2 mt-2">
                Food Quantity
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-600 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="number"
                defaultValue={foodQuantity}
                name="foodQuantity"
                placeholder="Food Quantity"
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2 mt-2">
                Expired Date
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-600 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="date"
                name="expiredDate"
                defaultValue={expiredDate}
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2 mt-2">
                Additional Notes
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 pr-8 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
                type="text"
                name="additionalNotes"
                defaultValue={additionalNotes}
                placeholder="Additional Notes"
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2 mt-2">
                Pickup Location
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-600 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                defaultValue={pickupLocation}
                name="pickupLocation"
                placeholder="Pickup Location"
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2 mt-2">
                Food Status
              </label>
              <input
                className="appearance-none block w-full bg-gray-300 text-gray-400 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                name="foodStatus"
                placeholder="Food Status"
                defaultValue={"available"}
                readOnly
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2">
                Donator Image
              </label>
              <input
                className="appearance-none block w-full bg-gray-300 text-gray-400 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                required
                defaultValue={user?.photoURL}
                readOnly
                placeholder="Donator Image"
              />
            </div>
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2">
                Food Donar Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-300 text-gray-400 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                placeholder="Food Donar Name"
                required
                defaultValue={user?.displayName}
                readOnly
              />
            </div>
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2 mt-2">
                Food Donar Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-300 text-gray-400 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="email"
                placeholder="Food Donar Email"
                required
                defaultValue={user?.email}
                readOnly
              />
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="btn hover:border-[#f86f03] bg-orange-500 outline-none  hover:text-[#f86f03] text-white  hover:bg-transparent hover:border my-7"
            >
              Update Food{" "}
              <MdOutlineUpdate className="text-xl"></MdOutlineUpdate>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateFood;
