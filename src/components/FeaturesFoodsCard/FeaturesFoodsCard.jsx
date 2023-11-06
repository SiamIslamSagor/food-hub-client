import PropTypes from "prop-types";
import { TfiInfoAlt } from "react-icons/tfi";
const FeaturesFoodsCard = ({ food }) => {
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

  return (
    <div className="card max-lg:max-w-96 max-xl:card-compact bg-base-100 shadow-xl">
      <figure>
        <img
          className="xl:w-[400px] w-[366px] h-64"
          src={foodImg}
          alt={foodName}
        />
      </figure>
      <div className="flex flex-col p-4 xl:p-8 gap-0">
        <h2 className="card-title mb-2">
          {foodName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <div>
          <p className="flex items-center gap-1 font-medium">
            <TfiInfoAlt></TfiInfoAlt>
            {additionalNotes}
          </p>
          <p>Available for {foodQuantity} people</p>
          <div className=" ">
            <div className="">{expiredDate} will expire</div>
            <div className="">Location: {pickupLocation}</div>
          </div>
        </div>
        <div className="avatar mt-2 xl:mt-4 items-center gap-2">
          <div className="w-10 rounded-full">
            <img src={donarImg} />
          </div>
          <h4 className="text-xl">{donarName}</h4>
        </div>
        <div className="card-actions justify-end">
          <button className="btn border-[#f86f03] hover:bg-orange-500 outline-none  text-[#f86f03] hover:text-white bg-transparent  max-lg: max-xl:btn-sm">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

FeaturesFoodsCard.propTypes = {
  food: PropTypes.object,
};

export default FeaturesFoodsCard;
