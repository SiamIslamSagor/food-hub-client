import { useNavigate } from "react-router-dom";
import useContextData from "./useContextData";
import { useEffect } from "react";
import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://food-hub-server-hazel.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logOut } = useContextData();
  const navigateAnother = useNavigate();
  ///
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      res => {
        return res;
      },
      error => {
        console.log("ERROR TRACK IN THE INTERCEPTOR", error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          console.log("log out the user");
          logOut()
            .then(() => {
              navigateAnother("/login");
            })
            .catch(error => {
              console.log(error);
            });
        }
      }
    );
  }, [logOut, navigateAnother]);

  return axiosSecure;
};

export default useAxiosSecure;
