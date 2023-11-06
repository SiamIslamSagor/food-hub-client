import { BsArrowUpCircle } from "react-icons/bs";
import useContextData from "../../hooks/useContextData";

const GooTop = () => {
  // context data
  const { gooTop } = useContextData();

  return (
    <button onClick={gooTop} className={`btn btn-sm`}>
      <BsArrowUpCircle className="text-lg"></BsArrowUpCircle> Goo Top
    </button>
  );
};

export default GooTop;
