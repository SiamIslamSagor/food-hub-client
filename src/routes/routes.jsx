import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../page/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivetRoute from "./PrivetRoute";
import ErrorPage from "../page/ErrorPage";
import AvailableFoods from "../page/AvailableFoods/AvailableFoods";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "available_foods",
        element: <AvailableFoods></AvailableFoods>,
      },
      {
        path: "add_food",
        element: (
          <PrivetRoute>
            <p>add Foods</p>
          </PrivetRoute>
        ),
      },
      {
        path: "manage_my_foods",
        element: (
          <PrivetRoute>
            <p>manage Foods</p>
          </PrivetRoute>
        ),
      },
      {
        path: "my_food_request",
        element: (
          <PrivetRoute>
            <p>food request</p>
          </PrivetRoute>
        ),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
