import { Helmet } from "react-helmet-async";
import MyTable from "../components/MyTable/MyTable";
import Title from "../components/Title/Title";

const ManageFood = () => {
  return (
    <div>
      <Helmet>
        <title>FoodHub | Manage Food</title>
      </Helmet>
      <Title>Manage Your Foods</Title>
      <MyTable></MyTable>
    </div>
  );
};

export default ManageFood;
