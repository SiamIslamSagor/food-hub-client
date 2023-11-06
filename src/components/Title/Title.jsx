import PropTypes from "prop-types";

const Title = ({ children }) => {
  return (
    <div className="">
      <h2 className="border-b-8 inline-block border-b-[#f86f03] text-center text-5xl tracking-tight font-bold my-8 mb-24">
        {children}
      </h2>
    </div>
  );
};

Title.propTypes = {
  children: PropTypes.string,
};

export default Title;
