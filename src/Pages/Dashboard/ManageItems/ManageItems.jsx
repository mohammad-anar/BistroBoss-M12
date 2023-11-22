import { FaTrashCan } from "react-icons/fa6";
import useLoadData from "../../../Hooks/useLoadData";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const ManageItems = () => {
    const formData = new FormData()
    console.log(formData);
    const navigate = useNavigate();
    const axiosSeure = useAxiosSecure();
    const location = useLocation();
    const pathname = location.pathname;
  const [menus, , refetch] = useLoadData();
  console.log(menus.length);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you Sure?",
      text: "Can't restore after delete it",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ff0000",
      cancelButtonColor: "#000",
      confirmButtonText: "delete",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSeure
          .delete(`/menus/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              toast.success("Deleted successfully!");
              refetch();
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };
  return (
    <div>
      <div className="bg-white p-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-[#151515] uppercase">
            Total Orders:
          </h2>
          <h2 className="text-xl font-bold text-[#151515] uppercase">
            Total Price:
          </h2>
          <button className=" btn bg-[#D1A054] text-lg rounded-xl hover:text-white hover:bg-[#D1A001] font-bold text-[#151515] uppercase">
            play
          </button>
        </div>
        <div>
          {/* table here  */}
          <div className="overflow-x-auto rounded-xl">
            <table className="table rounded-xl">
              {/* head */}
              <thead className=" bg-[#D1A054] ">
                <tr className="uppercase text-sm text-black">
                  <th>SL</th>
                  <th>Item image</th>
                  <th>item Name</th>
                  <th>Price</th>
                  <th colSpan={2} className="text-center">
                    Actoins
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {menus?.map((menu, indx) => (
                  <tr
                    key={menu?._id}
                    className="border-b border-0 border-gray-300"
                  >
                    <th>
                      <label>{indx + 1}</label>
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-16 h-16">
                            <img
                              src={menu?.image}
                              className="w-[300px]"
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{menu?.name}</td>
                    <td className="font-semibold">$ {menu?.price}</td>
                    <td className="text-right">
                      <button
                        onClick={() => {
                          navigate(`/dashboard/updateitem/${menu._id}`, { state: {pathname} });
                        }}
                        className=" text-white btn btn-ghost bg-warning p-3 rounded-lg"
                        title="Delete"
                      >
                        <FaEdit size={18}></FaEdit>
                      </button>
                    </td>
                    <td className="text-right">
                      <button
                        onClick={() => handleDelete(menu._id)}
                        className=" btn btn-ghost text-[#B91C1C] p-3 rounded-lg"
                        title="Delete"
                      >
                        <FaTrashCan size={25}></FaTrashCan>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
