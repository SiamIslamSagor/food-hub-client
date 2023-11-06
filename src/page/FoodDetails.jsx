/* eslint-disable react/no-unescaped-entities */
import { useLoaderData } from "react-router-dom";
import Title from "../components/Title/Title";
import { BsArrowRightCircle, BsInfoCircle } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import { GoGitPullRequest } from "react-icons/go";
import { Button } from "flowbite-react";
import useContextData from "../hooks/useContextData";

const FoodDetails = () => {
  // context data
  const { user } = useContextData();
  // single food data form loader
  const food = useLoaderData();

  const {
    _id,
    foodImg,
    foodName,
    foodQuantity,
    foodStatus,
    pickupLocation,
    expiredDate,
    donarImg,
    donarName,
    donarEmail,
    additionalNotes,
  } = food;
  console.log(food);

  const handleSubmit = e => {
    e.preventDefault();
    user.email;
  };

  return (
    <div className="container mx-auto min-h-screen">
      <Title>Food Details:</Title>
      <div className="">
        <div className="max-sm:px-2 max-w-2xl lg:max-w-4xl xl:max-w-6xl card lg:card-side bg-base-100 shadow-xl mx-auto">
          <figure className="flex-1">
            <img className="w-full h-full" src={foodImg} alt="Album" />
          </figure>
          <div className="max-sm:p-4 card-body flex-1 max-lg:-space-y-2 max-xl:-space-y-1">
            <h2 className="card-title text-2xl">
              <BsInfoCircle></BsInfoCircle>Donar Info!
            </h2>
            <p className="text-lg xl:text-xl">
              {" "}
              <span className="font-semibold">Name:</span> {donarName}
            </p>
            <p className="text-lg xl:text-xl">
              {" "}
              <span className="font-semibold">Email:</span> {donarEmail}
            </p>
            <p className="text-lg xl:text-xl">
              {" "}
              <span className="font-semibold">Location:</span> {pickupLocation}
            </p>
            <hr />
            <h2 className="card-title text-2xl">
              <BsInfoCircle></BsInfoCircle>Food Info!
            </h2>
            <p className="text-lg xl:text-xl">
              <span className="font-semibold">Food Name:</span> {foodName}
            </p>
            <p className="text-lg xl:text-xl">
              <span className="font-semibold">Food Quantity:</span>{" "}
              {foodQuantity}
            </p>
            <p className="text-lg xl:text-xl">
              <span className="font-semibold">Expired Date:</span> {expiredDate}
            </p>
            <p className="text-lg xl:text-xl">
              <span className="font-semibold">Food Status:</span> {foodStatus}
            </p>
            <p className="text-lg xl:text-xl">
              <span className="font-semibold">Additional Notes:</span>{" "}
              {additionalNotes}
            </p>
            <hr />
            <div className="card-actions justify-end">
              <button
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
                className="btn border-[#f86f03] hover:bg-orange-500 outline-none  text-[#f86f03] hover:text-white bg-transparent max-lg:mt-7"
              >
                Go to Request{" "}
                <BsArrowRightCircle className="text-xl"></BsArrowRightCircle>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* modal */}
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          {/* data */}
          <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
                  //   for="grid-password"
                >
                  Food Image
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-400 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="url"
                  placeholder="Food Image"
                  required
                  readOnly
                  defaultValue={foodImg}
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2 mt-2">
                  Food Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-400 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-first-name"
                  type="text"
                  placeholder="Food Name"
                  required
                  readOnly
                  defaultValue={foodName}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2 mt-2">
                  Food Id
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-400 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Food Id"
                  required
                  readOnly
                  defaultValue={_id}
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2 mt-2">
                  Food Donar Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-400 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  placeholder="Food Donar Name"
                  required
                  readOnly
                  defaultValue={donarName}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2 mt-2">
                  Food Donar Email
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-400 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="email"
                  placeholder="Food Donar Email"
                  required
                  readOnly
                  defaultValue={donarEmail}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2 mt-2">
                  Pickup Location
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-400 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Pickup Location"
                  required
                  readOnly
                  defaultValue={pickupLocation}
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2 mt-2">
                  Expired Date
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-400 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-first-name"
                  type="date"
                  placeholder="Expired Date"
                  required
                  readOnly
                  defaultValue={expiredDate}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2">
                  Donator Image
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-400 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  readOnly
                  required
                  placeholder="Donator Image"
                  defaultValue={donarImg}
                />
              </div>
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2">
                  Additional Notes
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 pr-8 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 relative"
                  type="text"
                  placeholder="Additional Notes"
                  defaultValue={additionalNotes}
                />
                <FiEdit2 className="absolute bottom-[205px] right-8 text-lg"></FiEdit2>
              </div>
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2">
                  Donation Mony
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 pr-8 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 relative"
                  type="text"
                  placeholder="Donation Mony"
                />
                <FiEdit2 className="absolute bottom-[125px] right-8 text-lg"></FiEdit2>
              </div>
            </div>
            <div className="text-center">
              <button
                onClick={handleSubmit}
                type="submit"
                className="btn hover:border-[#f86f03] bg-orange-500 outline-none  hover:text-[#f86f03] text-white  hover:bg-transparent hover:border"
              >
                <GoGitPullRequest></GoGitPullRequest> Request
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default FoodDetails;
