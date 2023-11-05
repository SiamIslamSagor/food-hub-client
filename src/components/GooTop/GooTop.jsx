import { BsArrowUpCircle } from "react-icons/bs";
import useContextData from "../../hooks/useContextData";

const GooTop = () => {
  // context data
  const { gooTop } = useContextData();

  return (
    <div className="container mx-auto my-10 text-right">
      <button onClick={gooTop} className={`btn my-4 sticky top-[90vh]`}>
        <BsArrowUpCircle className="text-lg"></BsArrowUpCircle> Goo Top
      </button>
    </div>
  );
};

export default GooTop;
