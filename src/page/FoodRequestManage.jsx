import { useLoaderData } from "react-router-dom";
import Title from "../components/Title/Title";
import NoFood from "../components/Lodder/NoFood";
import axios from "axios";
import toast from "react-hot-toast";

const FoodRequestManage = () => {
  // loader data in route
  const data = useLoaderData();
  console.log(data);
  //   handler
  const handleStatusChange = (id, foodId) => {
    console.log(id, foodId);

    // update status in requestedFoodCollection
    axios
      .patch(`http://localhost:5000/food_status/${id}`, {
        withCredentials: true,
      })
      .then(() => {
        // delete food form available food
        axios
          .delete(`http://localhost:5000/delete_food/${foodId}`)
          .then(() => {
            window.location.reload();
            toast.success("Food Delivered Successfully");
          })
          .catch(() => toast.error("Food Delivered Failed"));
      })
      .catch(() => {
        toast.error("Food Delivered Failed.");
      });
  };

  return (
    <div className="container mx-auto">
      <div className="">
        <Title>Manage a Food</Title>
        {/* {data || <NoFood>No Request for This Food</NoFood>} */}
        {data?.length !== 0 && (
          <h5 className="text-center text-2xl md:text-4xl lg:text-5xl mb-24">
            {data?.length} People Have Requested for This Food.
          </h5>
        )}
        {data?.length !== 0 ? (
          <div className="min-h-[85vh] grid grid-cols-1 md:grid-cols-2 mx-2 gap-8 xl:grid-cols-3 justify-items-center">
            {data?.map(req => {
              return (
                <div
                  key={req._id}
                  className=" h-[370px] w-[370px] bg-[#ff9d57] flex flex-col items-center justify-center gap-3 px-4 rounded-lg"
                >
                  <div className="flex-1 pt-14 flex flex-col items-center">
                    <img
                      className="rounded-full w-28 h-28"
                      src={req?.requesterImage}
                      alt=""
                    />
                    <h3 className="text-3xl font-medium text-center">
                      Requester Name:{" "}
                      <span className="font-semibold">
                        {req?.requesterName}
                      </span>
                    </h3>
                    <p className="text-xl text-center  font-medium">
                      Requester Email: {req?.requesterEmail}
                    </p>
                    <p className="text-lg text-center  font-medium">
                      Requester Date: {req?.requestDate}
                    </p>
                  </div>
                  <button
                    onClick={() => handleStatusChange(req?._id, req?.id)}
                    className="btn mb-8"
                  >
                    {req?.foodStatus}
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          <NoFood>There are no requests for this Food</NoFood>
        )}
      </div>
    </div>
  );
};

export default FoodRequestManage;
