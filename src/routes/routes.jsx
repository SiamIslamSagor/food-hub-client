import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../page/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivetRoute from "./PrivetRoute";
import ErrorPage from "../page/ErrorPage";
import AvailableFoods from "../page/AvailableFoods/AvailableFoods";
import FoodDetails from "../page/FoodDetails";
import AddFood from "../page/AddFood";
import ManageFood from "../page/ManageFood";
import UpdateFood from "../page/UpdateFood";
import FoodRequestManage from "../page/FoodRequestManage";

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
        path: "food/:id",
        element: (
          <PrivetRoute>
            <FoodDetails></FoodDetails>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/get_food/${params.id}`),
      },
      {
        path: "add_food",
        element: (
          <PrivetRoute>
            <AddFood></AddFood>
          </PrivetRoute>
        ),
      },
      {
        path: "manage_my_foods",
        element: (
          <PrivetRoute>
            <ManageFood></ManageFood>
          </PrivetRoute>
        ),
      },
      {
        path: "manage_food/:id",
        element: (
          <PrivetRoute>
            <FoodRequestManage></FoodRequestManage>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/requested_food/${params.id}`),
      },
      {
        path: "update_food",
        element: (
          <PrivetRoute>
            <UpdateFood></UpdateFood>
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
