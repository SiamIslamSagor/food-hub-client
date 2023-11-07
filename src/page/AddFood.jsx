import PropTypes from "prop-types";
import Title from "../components/Title/Title";
import { GoGitPullRequest } from "react-icons/go";
import { FiEdit2 } from "react-icons/fi";
import { BsDatabaseAdd } from "react-icons/bs";

const AddFood = props => {
  const handleSubmit = e => {
    const toastId = toast.loading("processing...");

    e.preventDefault();
    // get current date
    const currentDate = new Date();
    // get day, month and year
    const year = currentDate.getFullYear().toString();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    const day = currentDate.getDay().toString();
    // current request date
    const requestDate = `${year}-${month}-${day}`;
    // const requestedAdditional
    const requestedFoodInfo = {
      id: _id,
      foodImg,
      foodName,
      foodQuantity,
      foodStatus,
      pickupLocation,
      expiredDate,
      requestDate,
      donarImg,
      donarName,
      donarEmail,
      additionalNotes: additionalNotesRef.current.value || "Not Given",
      donationMony: donationMonyRef.current.value || "Not Given",
      requesterName: user?.displayName || "Not Given",
      requesterEmail: user?.email || "Not Given",
      requesterImage: user?.photoURL || "Not Given",
    };
    console.log(requestedFoodInfo);
    // send in server side
    axios
      .post("http://localhost:5000/requestCollection", requestedFoodInfo, {
        withCredentials: true,
      })
      .then(() => {
        toast.success("Request successfully.", { id: toastId });
      })
      .catch(() => {
        toast.error("Request Failed.", { id: toastId });
      });
  };

  return (
    <div className="container mx-auto">
      <Title>Add Food Here</Title>
      <div className="flex items-center justify-center max-sm:px-2">
        <form className="w-full max-sm:max-w-lg sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl">
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
              />
            </div>
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2">
                Additional Notes
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 pr-8 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
                type="text"
                name="additionalNotes"
                placeholder="Additional Notes"
              />
            </div>
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2">
                Donation Mony
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 pr-8 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
                type="text"
                name="donationMony"
                placeholder="Donation Mony"
              />
            </div>
          </div>
          <div className="text-center">
            <button
              //   onClick={handleSubmit}
              type="submit"
              className="btn border-[#f86f03] hover:bg-orange-500 outline-none  text-[#f86f03] hover:text-white bg-transparent max-lg:mt-7"
            >
              Add Food <BsDatabaseAdd></BsDatabaseAdd>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

AddFood.propTypes = {};

export default AddFood;
