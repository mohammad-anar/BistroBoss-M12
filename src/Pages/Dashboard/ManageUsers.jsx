import { FaTrashCan, FaUsers } from "react-icons/fa6";
import SectionHeading from "../../Components/Shared/SectionHeading";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const ManageUsers = () => {
  // get axios secure from useAxiosSecure hook
  const axiosSecure = useAxiosSecure();
  // load users data by tanstact/react-query
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const result = await axiosSecure.get("/users");
      return result.data;
    },
  });
  // delete user
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
        axiosSecure
          .delete(`/users/${id}`)
          .then(() => {
            toast.success("Deleted successfully!");
            refetch();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };
  // make admin user 
  const handleAdmin = (id) => {
    Swal.fire({
        title: "Are you Sure?",
        text: "Want to make user admin?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "green",
        cancelButtonColor: "#green",
        confirmButtonText: "update",
      }).then((result) => {
        if (result.isConfirmed) {
            axiosSecure.patch(`/users/admin/${id}`)
            .then(() => {
                refetch()
                toast.success("Update user to admin")
            }).catch(err => {
                console.log(err);
            })
        }
      });

    

  }
  return (
    <div>
      <SectionHeading
        subTitle={"How Many??"}
        title={"Manage All Users"}
      ></SectionHeading>
      <div className="bg-white p-4 rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-[#151515] uppercase">
            Total Users:{users?.length.toString().padStart(2, 0)}
          </h2>
        </div>
        {/* table here  */}
        <div className="overflow-x-auto rounded-xl">
          <table className="table rounded-xl">
            {/* head */}
            <thead className=" bg-[#D1A054] ">
              <tr className="uppercase text-sm text-black">
                <th>SL</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th className="text-center">Actoin</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users?.map((user, indx) => (
                <tr
                  key={user?._id}
                  className="border-b border-0 border-gray-300"
                >
                  <th>
                    <label>{indx + 1}</label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <h2 className="text-lg">{user?.name}</h2>
                    </div>
                  </td>
                  <td>{user?.email}</td>
                  <td className="font-semibold">
                   {user.role === "admin" ? "Admin": <button onClick={() => handleAdmin(user._id)} className="btn bg-amber-500 text-white p-2 px-4 rounded-lg">
                      <FaUsers size={20}></FaUsers>
                    </button>}
                  </td>
                  <th className="text-right">
                    <button
                      onClick={() => handleDelete(user._id)}
                      className=" text-[#B91C1C] p-3 rounded-lg"
                      title="Delete"
                    >
                      <FaTrashCan size={25}></FaTrashCan>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
