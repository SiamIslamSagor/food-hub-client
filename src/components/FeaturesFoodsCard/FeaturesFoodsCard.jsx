import PropTypes from "prop-types";
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
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="w-full max-w-sm h-64" src={foodImg} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Shoes!
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

FeaturesFoodsCard.propTypes = {
  food: PropTypes.object,
};

export default FeaturesFoodsCard;
