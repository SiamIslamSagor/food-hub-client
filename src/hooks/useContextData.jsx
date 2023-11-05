import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useContextData = () => {
  const data = useContext(AuthContext);
  return data;
};

export default useContextData;
