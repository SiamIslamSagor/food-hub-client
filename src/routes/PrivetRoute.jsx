import PropTypes from "prop-types";
import useContextData from "../hooks/useContextData";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Lodder/Loader";
const PrivetRoute = ({ children }) => {
  // location data
  const location = useLocation();
  // context dat
  const { user, cooking } = useContextData();

  if (cooking) {
    return <Loader></Loader>;
  }

  if (!user) {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }

  return children;
};

PrivetRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivetRoute;
