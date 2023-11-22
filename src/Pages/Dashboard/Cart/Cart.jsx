import { useEffect } from "react";
import SectionHeading from "../../../Components/Shared/SectionHeading";
import useCart from "../../../Hooks/useCart";
import { FaTrashCan } from "react-icons/fa6";
import { FadeLoader } from "react-spinners";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Cart = () => {
  const axiosSecure = useAxiosSecure();
  const [carts, refetch, isLoading] = useCart();
  const totalPrice = carts?.reduce((total, cart) => {
    return total + cart?.price;
  }, 0);
  useEffect(() => {
    refetch();
  }, [refetch, carts]);
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
          .delete(`/cart/${id}`)
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
  return (
    <div>
      <SectionHeading
        subTitle={"My Cart"}
        title={"WANNA ADD MORE?"}
      ></SectionHeading>
      {isLoading ? (
        <div className="min-h-[50vh] flex items-center justify-center">
          <FadeLoader color="#D1A001" />
        </div>
      ) : (
        <div className="bg-white p-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-[#151515] uppercase">
              Total Orders:{carts?.length.toString().padStart(2, 0)}
            </h2>
            <h2 className="text-xl font-bold text-[#151515] uppercase">
              Total Price: $ {totalPrice}
            </h2>
            {carts.length > 0 ? (
              <Link to={"/dashboard/payment"}>
                <button className=" btn bg-[#D1A054] text-lg rounded-xl hover:text-white hover:bg-[#D1A001] font-bold text-white uppercase">
                  pay
                </button>
              </Link>
            ) : (
              <button disabled className=" btn bg-[#D1A054] text-lg rounded-xl hover:text-white hover:bg-[#D1A001] font-bold text-white uppercase">
                pay
              </button>
            )}
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
                    <th className="text-center">Actoin</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {carts?.map((cart, indx) => (
                    <tr
                      key={cart?._id}
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
                                src={cart?.image}
                                className="w-[300px]"
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{cart?.name}</td>
                      <td className="font-semibold">$ {cart?.price}</td>
                      <th className="text-right">
                        <button
                          onClick={() => handleDelete(cart._id)}
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
      )}
    </div>
  );
};

export default Cart;
