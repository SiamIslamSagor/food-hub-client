import { useState, useReducer, useEffect } from "react";
import "./MyTable.css";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import axios from "axios";
import toast from "react-hot-toast";
import useContextData from "../../hooks/useContextData";
import { MdManageSearch } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { HiRefresh } from "react-icons/hi";
import { setClickFoodIdInLs } from "../../utils/localStorage";
import { Link } from "react-router-dom";
import NoFood from "../Lodder/NoFood";
import Swal from "sweetalert2";
const defaultData = [];

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor(row => row.foodName, {
    id: "foodName",
    cell: info => info.getValue(),
    header: () => <span>Food Name</span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor(row => row.foodQuantity, {
    id: "foodQuantity",
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>Food Quantity</span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor(row => row.expiredDate, {
    id: "expiredDate",
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>Expired On</span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor(row => row.pickupLocation, {
    id: "pickupLocation",
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>Pickup Location</span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor(row => row.foodStatus, {
    id: "foodStatus",
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>Status</span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor(row => row._id, {
    id: "action",
    cell: props => (
      <div className="flex gap-4 lg:gap-8 justify-center px-2">
        <Link to="/update_food">
          <button
            onClick={() => setClickFoodIdInLs(props.row.original._id)}
            className="btn h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 btn-circle text-xl btn-sm btn-primary"
          >
            <FiEdit2></FiEdit2>
          </button>
        </Link>

        <Link to={`/manage_food/${props.row.original._id}`}>
          <button
            onClick={() => setClickFoodIdInLs(props.row.original._id)}
            className="btn h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 btn-circle text-xl btn-sm btn-secondary"
          >
            <MdManageSearch className="text-3xl"></MdManageSearch>
          </button>
        </Link>

        <button
          onClick={() =>
            handleDelete(props.row.original._id, props.row.original.hexString)
          }
          className="btn h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 btn-circle text-xl btn-sm btn-neutral"
        >
          <RiDeleteBin6Line></RiDeleteBin6Line>
        </button>
      </div>
    ),
    header: () => <span>Action</span>,
    footer: info => info.column.id,
  }),
];

// click handler
const handleDelete = (id, hexString) => {
  console.log("id is", id);
  console.log("hexString is", hexString);
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then(result => {
    if (result.isConfirmed) {
      const toastId = toast.loading("processing...");

      // delete form added food collection in database
      axios
        .delete(`http://localhost:5000/delete_food/${id}`)
        .then(() => {
          // delete form foods collection in database
          axios
            .delete(`http://localhost:5000/delete_added_food/${hexString}`)
            .then(() => {
              toast.success("Food Deleted Successfully", { id: toastId });
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              window.location.reload();
            })
            .catch(() => toast.error("Food Delete Failed", { id: toastId }));

          // toast.success("Food Deleted Successfully", { id: toastId });
          // Swal.fire({
          //   title: "Deleted!",
          //   text: "Your file has been deleted.",
          //   icon: "success",
          // });
          // window.location.reload();
        })
        .catch(() => toast.error("Food Delete Failed", { id: toastId }));
    }
  });
};

const MyTable = () => {
  const { user } = useContextData();
  const [data, setData] = useState([...defaultData]);
  const rerender = useReducer(() => ({}), {})[1];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  //
  useEffect(() => {
    // send added food in server side and database
    axios
      .get(`http://localhost:5000/added_Food?email=${user?.email}`)
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        toast.error("Failed to Load Added Foods.");
        console.log(err);
      });
  }, [user?.email]);

  return (
    <div className="p-2 overflow-x-auto overflow-y-hidden">
      {data?.length === 0 ? (
        <NoFood>
          You have not added any food
          <Link to="/add_food">
            <span className="text-lg hover:underline cursor-pointer text-blue-600 ml-5">
              Add food now
            </span>
          </Link>
        </NoFood>
      ) : (
        <div className="overflow-x-auto overflow-y-hidden">
          <table className="container w-full mx-auto max-sm:max-w-xs">
            <thead>
              {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map(header => (
                    <th
                      className="text-2xl md:p-3 lg:p-5 lg:text-3xl"
                      key={header.id}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map(row => (
                <tr key={row.id}>
                  {row.getVisibleCells().map(cell => (
                    <td
                      className="text-center text-xl lg:text-2xl p-2 text-gray-600 border-2"
                      key={cell.id}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
            <tfoot>
              {table.getFooterGroups().map(footerGroup => (
                <tr key={footerGroup.id}>
                  {footerGroup.headers.map(header => (
                    <th key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.footer,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </tfoot>
          </table>
          <div className="h-4 text-center container mx-auto my-10">
            <button
              onClick={() => rerender()}
              className="btn hover:border-[#f86f03] bg-orange-500 outline-none  hover:text-[#f86f03] text-white  hover:bg-transparent hover:border"
            >
              Refresh <HiRefresh className="text-xl"></HiRefresh>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyTable;
