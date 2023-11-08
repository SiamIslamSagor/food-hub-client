import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useContextData from "../hooks/useContextData";
import Title from "../components/Title/Title";
import NoFood from "../components/Lodder/NoFood";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const MyFoodRequest = () => {
  // context data
  const { user } = useContextData();
  const [myAllRequest, setMyAllRequest] = useState([]);

  // hook
  const axiosSecure = useAxiosSecure();

  //
  //   const url = `https://food-hub-server-hazel.vercel.app/my_all_request?email=${user?.email}`;

  const url = `/my_all_request?email=${user?.email}`;

  /// handle delete request
  const handleDeleteRequest = id => {
    const toastId = toast.loading("processing...");

    console.log(id);
    //
    axios
      .delete(`https://food-hub-server-hazel.vercel.app/delete_request/${id}`)
      .then(() => {
        toast.success("Request cancel Successfully.", { id: toastId });
        location.reload();
      })
      .catch(() => {
        toast.error("Request cancel Failed.", { id: toastId });
      });
  };

  // use effect
  useEffect(() => {
    // send added food in server side and database
    axiosSecure.get(url).then(res => {
      setMyAllRequest(res.data);
      console.log(res.data);
    });
    //
    /* axios
      .get(`https://food-hub-server-hazel.vercel.app/my_all_request?email=${user?.email}`, {
        withCredentials: true,
      })
      .then(res => {
        setMyAllRequest(res.data);
        console.log(res.data);
      })
      .catch(err => {
        toast.error("Failed to Load Added Foods.");
        console.log(err);
      }); */
  }, [axiosSecure, url]);

  return (
    <div>
      <Helmet>
        <title>FoodHub | My Food Request</title>
      </Helmet>
      <Title>My All Food Request</Title>
      {myAllRequest?.length === 0 ? (
        <NoFood>You do not have request for any food</NoFood>
      ) : (
        <div className="mx-auto container grid grid-cols-1 lg:grid-cols-2 gap-5 pb-10 ">
          {myAllRequest?.map(req => {
            return (
              <div
                key={req._id}
                className="card card-side bg-base-100 shadow-xl max-md:flex-col md:"
              >
                <figure className="flex-1">
                  <img
                    className="w-full h-full max-md:rounded-xl"
                    src={req.foodImg}
                    alt="Movie"
                  />
                </figure>
                <div className="card-body flex-1 max-md:leading-3">
                  <h2 className="card-title md:text-2xl">
                    Donar Name: {req?.donarName}
                  </h2>
                  <p className="sm:-mb-8 md:mb-0 md:text-xl">
                    Pickup Location: {req?.pickupLocation}
                  </p>
                  <p className="sm:-mb-8 md:mb-0 md:text-xl">
                    Expired On: {req?.expiredDate}
                  </p>
                  <p className="sm:-mb-8 md:mb-0 md:text-xl">
                    Requested Date: {req?.requestDate}
                  </p>
                  <p className="sm:-mb-8 md:mb-0 md:text-xl">
                    Your Donation: {req?.donationMony}
                  </p>
                  <p className="sm:-mb-8 md:mb-0 md:text-xl">
                    Status: {req?.foodStatus}
                  </p>
                  <div className="card-actions justify-end">
                    <button
                      onClick={() => handleDeleteRequest(req?._id)}
                      disabled={req?.foodStatus === "Delivered" ? true : false}
                      className="btn btn-primary"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MyFoodRequest;
